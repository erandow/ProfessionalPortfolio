import { Client } from "@notionhq/client";
import { notion, NOTION_PAGE_ID, createDatabaseIfNotExists, findDatabaseByTitle } from "./notion";

// Environment variables validation
if (!process.env.NOTION_INTEGRATION_SECRET) {
    console.error("NOTION_INTEGRATION_SECRET is not defined. Please add it to your environment variables.");
    process.exit(1);
}

if (!process.env.NOTION_PAGE_URL) {
    console.error("NOTION_PAGE_URL is not defined. Please add it to your environment variables.");
    process.exit(1);
}

// Setup function for blog posts database
async function setupNotionDatabases() {
    console.log("Setting up Notion databases...");
    
    try {
        await createDatabaseIfNotExists("Blog Posts", {
            // Every database needs a Name/Title property
            Title: {
                title: {}
            },
            Slug: {
                rich_text: {}
            },
            Content: {
                rich_text: {}
            },
            Excerpt: {
                rich_text: {}
            },
            PublishedAt: {
                date: {}
            },
            Category: {
                select: {
                    options: [
                        { name: "Technology", color: "blue" },
                        { name: "Development", color: "green" },
                        { name: "AI Ethics", color: "orange" },
                        { name: "Research", color: "purple" },
                        { name: "Tutorial", color: "yellow" },
                        { name: "Uncategorized", color: "gray" }
                    ]
                }
            },
            ReadTime: {
                rich_text: {}
            },
            Locale: {
                select: {
                    options: [
                        { name: "en", color: "blue" },
                        { name: "fa", color: "green" }
                    ]
                }
            },
            FeaturedImage: {
                url: {}
            },
            AuthorName: {
                rich_text: {}
            },
            AuthorEmail: {
                email: {}
            }
        });

        console.log("Database setup completed!");
    } catch (error) {
        console.error("Error setting up Notion databases:", error);
        process.exit(1);
    }
}

async function createSampleData() {
    try {
        console.log("Adding sample blog posts data...");

        // Find the databases again
        const blogDb = await findDatabaseByTitle("Blog Posts");

        if (!blogDb) {
            throw new Error("Could not find the Blog Posts database.");
        }

        const posts = [
            {
                title: "The Future of AI in Web Development",
                slug: "future-ai-web-development",
                content: "<p>Artificial intelligence is rapidly changing the landscape of web development. From automated coding assistants to intelligent design systems, AI is revolutionizing how we build and interact with web applications.</p><p>This article explores the current state of AI in web development and offers predictions about where this technology is headed in the near future.</p>",
                excerpt: "Explore how artificial intelligence is revolutionizing the way we build and interact with web applications.",
                publishedAt: new Date().toISOString(),
                category: "Technology",
                readTime: "8 min read",
                locale: "en",
                featuredImage: "https://images.unsplash.com/photo-1677442135302-c4c7dd918517",
                authorName: "Erfan Asadi",
                authorEmail: "erfan@example.com"
            },
            {
                title: "Optimizing Performance in React Applications",
                slug: "optimizing-react-performance",
                content: "<p>Performance optimization is crucial for delivering a smooth user experience in React applications. This comprehensive guide covers key strategies including component memoization, lazy loading, and code splitting.</p><p>Learn how to identify and fix common performance bottlenecks in your React applications.</p>",
                excerpt: "Learn key strategies and best practices to significantly improve the performance of your React applications.",
                publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days ago
                category: "Development",
                readTime: "12 min read",
                locale: "en",
                featuredImage: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2",
                authorName: "Erfan Asadi",
                authorEmail: "erfan@example.com"
            },
            {
                title: "Ethics in Machine Learning Research",
                slug: "ethics-machine-learning-research",
                content: "<p>As machine learning increasingly becomes integrated into critical systems and decision-making processes, ethical considerations have never been more important.</p><p>This article examines the ethical principles that should guide machine learning research and deployment, including fairness, accountability, transparency, and responsibility.</p>",
                excerpt: "Examine important ethical considerations that should guide the research and deployment of machine learning systems.",
                publishedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(), // 14 days ago
                category: "AI Ethics",
                readTime: "10 min read",
                locale: "en",
                featuredImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
                authorName: "Erfan Asadi",
                authorEmail: "erfan@example.com"
            }
        ];

        for (const post of posts) {
            await notion.pages.create({
                parent: {
                    database_id: blogDb.id
                },
                properties: {
                    Title: {
                        title: [
                            {
                                text: {
                                    content: post.title
                                }
                            }
                        ]
                    },
                    Slug: {
                        rich_text: [
                            {
                                text: {
                                    content: post.slug
                                }
                            }
                        ]
                    },
                    Content: {
                        rich_text: [
                            {
                                text: {
                                    content: post.content
                                }
                            }
                        ]
                    },
                    Excerpt: {
                        rich_text: [
                            {
                                text: {
                                    content: post.excerpt
                                }
                            }
                        ]
                    },
                    PublishedAt: {
                        date: {
                            start: post.publishedAt
                        }
                    },
                    Category: {
                        select: {
                            name: post.category
                        }
                    },
                    ReadTime: {
                        rich_text: [
                            {
                                text: {
                                    content: post.readTime
                                }
                            }
                        ]
                    },
                    Locale: {
                        select: {
                            name: post.locale
                        }
                    },
                    FeaturedImage: {
                        url: post.featuredImage
                    },
                    AuthorName: {
                        rich_text: [
                            {
                                text: {
                                    content: post.authorName
                                }
                            }
                        ]
                    },
                    AuthorEmail: {
                        email: post.authorEmail
                    }
                }
            });
        }

        // Add Persian versions
        const persianPosts = [
            {
                title: "آینده هوش مصنوعی در توسعه وب",
                slug: "future-ai-web-development",
                content: "<p>هوش مصنوعی به سرعت در حال تغییر چشم‌انداز توسعه وب است. از دستیاران کدنویسی خودکار گرفته تا سیستم‌های طراحی هوشمند، هوش مصنوعی در حال انقلاب در نحوه ساخت و تعامل ما با برنامه‌های وب است.</p><p>این مقاله وضعیت فعلی هوش مصنوعی در توسعه وب را بررسی می‌کند و پیش‌بینی‌هایی درباره مسیر این فناوری در آینده نزدیک ارائه می‌دهد.</p>",
                excerpt: "بررسی چگونگی انقلاب هوش مصنوعی در نحوه ساخت و تعامل ما با برنامه‌های وب.",
                publishedAt: new Date().toISOString(),
                category: "فناوری",
                readTime: "۸ دقیقه مطالعه",
                locale: "fa",
                featuredImage: "https://images.unsplash.com/photo-1677442135302-c4c7dd918517",
                authorName: "عرفان اسدی",
                authorEmail: "erfan@example.com"
            },
            {
                title: "بهینه‌سازی عملکرد در برنامه‌های ری‌اکت",
                slug: "optimizing-react-performance",
                content: "<p>بهینه‌سازی عملکرد برای ارائه تجربه کاربری روان در برنامه‌های ری‌اکت بسیار مهم است. این راهنمای جامع استراتژی‌های کلیدی شامل مموایزیشن کامپوننت، بارگذاری تنبل، و تقسیم کد را پوشش می‌دهد.</p><p>نحوه شناسایی و رفع گلوگاه‌های متداول عملکرد در برنامه‌های ری‌اکت خود را بیاموزید.</p>",
                excerpt: "استراتژی‌های کلیدی و بهترین شیوه‌ها را برای بهبود قابل توجه عملکرد برنامه‌های ری‌اکت خود بیاموزید.",
                publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days ago
                category: "توسعه",
                readTime: "۱۲ دقیقه مطالعه",
                locale: "fa",
                featuredImage: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2",
                authorName: "عرفان اسدی",
                authorEmail: "erfan@example.com"
            },
            {
                title: "اخلاق در پژوهش یادگیری ماشین",
                slug: "ethics-machine-learning-research",
                content: "<p>همچنان که یادگیری ماشین به طور فزاینده‌ای در سیستم‌های حیاتی و فرآیندهای تصمیم‌گیری ادغام می‌شود، ملاحظات اخلاقی هرگز مهم‌تر از این نبوده‌اند.</p><p>این مقاله اصول اخلاقی که باید تحقیقات و استقرار یادگیری ماشین را هدایت کنند، از جمله انصاف، پاسخگویی، شفافیت و مسئولیت‌پذیری، بررسی می‌کند.</p>",
                excerpt: "بررسی ملاحظات اخلاقی مهمی که باید تحقیق و استقرار سیستم‌های یادگیری ماشین را هدایت کنند.",
                publishedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(), // 14 days ago
                category: "اخلاق هوش مصنوعی",
                readTime: "۱۰ دقیقه مطالعه",
                locale: "fa",
                featuredImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
                authorName: "عرفان اسدی",
                authorEmail: "erfan@example.com"
            }
        ];

        for (const post of persianPosts) {
            await notion.pages.create({
                parent: {
                    database_id: blogDb.id
                },
                properties: {
                    Title: {
                        title: [
                            {
                                text: {
                                    content: post.title
                                }
                            }
                        ]
                    },
                    Slug: {
                        rich_text: [
                            {
                                text: {
                                    content: post.slug
                                }
                            }
                        ]
                    },
                    Content: {
                        rich_text: [
                            {
                                text: {
                                    content: post.content
                                }
                            }
                        ]
                    },
                    Excerpt: {
                        rich_text: [
                            {
                                text: {
                                    content: post.excerpt
                                }
                            }
                        ]
                    },
                    PublishedAt: {
                        date: {
                            start: post.publishedAt
                        }
                    },
                    Category: {
                        select: {
                            name: post.category
                        }
                    },
                    ReadTime: {
                        rich_text: [
                            {
                                text: {
                                    content: post.readTime
                                }
                            }
                        ]
                    },
                    Locale: {
                        select: {
                            name: post.locale
                        }
                    },
                    FeaturedImage: {
                        url: post.featuredImage
                    },
                    AuthorName: {
                        rich_text: [
                            {
                                text: {
                                    content: post.authorName
                                }
                            }
                        ]
                    },
                    AuthorEmail: {
                        email: post.authorEmail
                    }
                }
            });
        }

        console.log("Sample blog posts created successfully!");
    } catch (error) {
        console.error("Error creating sample data:", error);
    }
}

// Run the setup
console.log("Starting Notion setup process...");
setupNotionDatabases()
    .then(() => {
        return createSampleData();
    })
    .then(() => {
        console.log("Notion setup completed successfully!");
        process.exit(0);
    })
    .catch(error => {
        console.error("Setup failed:", error);
        process.exit(1);
    });