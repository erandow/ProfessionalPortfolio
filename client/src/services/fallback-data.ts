// Fallback data for development purposes only
// This will be used when the Strapi API is not available

import { BlogPost, StrapiResponse } from './strapi';

// Fallback blog posts for English
export const fallbackBlogPostsEn: StrapiResponse<BlogPost[]> = {
  data: [
    {
      id: 1,
      attributes: {
        title: "The Future of AI in Web Development",
        slug: "future-ai-web-development",
        content: "<p>Artificial intelligence is rapidly transforming the web development landscape. From automated coding assistants to intelligent design systems, AI is revolutionizing how we build and interact with web applications.</p><p>This article explores the current state of AI in web development and makes predictions about where the technology is headed in the near future.</p>",
        excerpt: "Exploring how artificial intelligence is revolutionizing the way we build and interact with web applications.",
        publishedAt: "2023-05-10T10:00:00.000Z",
        category: "Technology",
        readTime: "8 min read",
        locale: "en",
        featuredImage: {
          data: {
            id: 1,
            attributes: {
              url: "/placeholder/ai-web-dev.jpg",
              formats: {
                thumbnail: { url: "/placeholder/ai-web-dev-thumb.jpg" },
                small: { url: "/placeholder/ai-web-dev-small.jpg" },
                medium: { url: "/placeholder/ai-web-dev-medium.jpg" },
              }
            }
          }
        },
        author: {
          data: {
            id: 1,
            attributes: {
              name: "Erfan Asadi",
              email: "contact@erfanasadi.dev"
            }
          }
        },
        localizations: {
          data: [
            {
              id: 101,
              attributes: {
                locale: "fa"
              }
            }
          ]
        }
      }
    },
    {
      id: 2,
      attributes: {
        title: "Optimizing Performance in React Applications",
        slug: "optimizing-react-performance",
        content: "<p>Performance optimization is crucial for delivering a smooth user experience in React applications. This comprehensive guide covers key strategies including component memoization, lazy loading, and code splitting.</p><p>Learn how to identify and resolve common performance bottlenecks in your React applications.</p>",
        excerpt: "Learn key strategies and best practices to significantly improve the performance of your React applications.",
        publishedAt: "2023-04-22T10:00:00.000Z",
        category: "Development",
        readTime: "12 min read",
        locale: "en",
        featuredImage: {
          data: {
            id: 2,
            attributes: {
              url: "/placeholder/react-performance.jpg",
              formats: {
                thumbnail: { url: "/placeholder/react-performance-thumb.jpg" },
                small: { url: "/placeholder/react-performance-small.jpg" },
                medium: { url: "/placeholder/react-performance-medium.jpg" },
              }
            }
          }
        },
        author: {
          data: {
            id: 1,
            attributes: {
              name: "Erfan Asadi",
              email: "contact@erfanasadi.dev"
            }
          }
        },
        localizations: {
          data: [
            {
              id: 102,
              attributes: {
                locale: "fa"
              }
            }
          ]
        }
      }
    },
    {
      id: 3,
      attributes: {
        title: "Ethics in Machine Learning Research",
        slug: "ethics-machine-learning-research",
        content: "<p>As machine learning becomes increasingly integrated into critical systems and decision-making processes, ethical considerations have never been more important.</p><p>This article examines the ethical principles that should guide machine learning research and deployment, including fairness, accountability, transparency, and responsibility.</p>",
        excerpt: "Discussing the important ethical considerations that should guide research and deployment of machine learning systems.",
        publishedAt: "2023-03-15T10:00:00.000Z",
        category: "AI Ethics",
        readTime: "10 min read",
        locale: "en",
        featuredImage: {
          data: {
            id: 3,
            attributes: {
              url: "/placeholder/ai-ethics.jpg",
              formats: {
                thumbnail: { url: "/placeholder/ai-ethics-thumb.jpg" },
                small: { url: "/placeholder/ai-ethics-small.jpg" },
                medium: { url: "/placeholder/ai-ethics-medium.jpg" },
              }
            }
          }
        },
        author: {
          data: {
            id: 1,
            attributes: {
              name: "Erfan Asadi",
              email: "contact@erfanasadi.dev"
            }
          }
        },
        localizations: {
          data: [
            {
              id: 103,
              attributes: {
                locale: "fa"
              }
            }
          ]
        }
      }
    }
  ],
  meta: {
    pagination: {
      page: 1,
      pageSize: 3,
      pageCount: 1,
      total: 3
    }
  }
};

// Fallback blog posts for Persian
export const fallbackBlogPostsFa: StrapiResponse<BlogPost[]> = {
  data: [
    {
      id: 101,
      attributes: {
        title: "آینده هوش مصنوعی در توسعه وب",
        slug: "future-ai-web-development",
        content: "<p>هوش مصنوعی به سرعت در حال تغییر چشم‌انداز توسعه وب است. از دستیاران کدنویسی خودکار گرفته تا سیستم‌های طراحی هوشمند، هوش مصنوعی در حال انقلاب در نحوه ساخت و تعامل ما با برنامه‌های وب است.</p><p>این مقاله وضعیت فعلی هوش مصنوعی در توسعه وب را بررسی می‌کند و پیش‌بینی‌هایی درباره مسیر این فناوری در آینده نزدیک ارائه می‌دهد.</p>",
        excerpt: "بررسی چگونگی انقلاب هوش مصنوعی در نحوه ساخت و تعامل ما با برنامه‌های وب.",
        publishedAt: "2023-05-10T10:00:00.000Z",
        category: "فناوری",
        readTime: "۸ دقیقه مطالعه",
        locale: "fa",
        featuredImage: {
          data: {
            id: 1,
            attributes: {
              url: "/placeholder/ai-web-dev.jpg",
              formats: {
                thumbnail: { url: "/placeholder/ai-web-dev-thumb.jpg" },
                small: { url: "/placeholder/ai-web-dev-small.jpg" },
                medium: { url: "/placeholder/ai-web-dev-medium.jpg" },
              }
            }
          }
        },
        author: {
          data: {
            id: 1,
            attributes: {
              name: "عرفان اسدی",
              email: "contact@erfanasadi.dev"
            }
          }
        },
        localizations: {
          data: [
            {
              id: 1,
              attributes: {
                locale: "en"
              }
            }
          ]
        }
      }
    },
    {
      id: 102,
      attributes: {
        title: "بهینه‌سازی عملکرد در برنامه‌های ری‌اکت",
        slug: "optimizing-react-performance",
        content: "<p>بهینه‌سازی عملکرد برای ارائه تجربه کاربری روان در برنامه‌های ری‌اکت بسیار مهم است. این راهنمای جامع استراتژی‌های کلیدی شامل مموایزیشن کامپوننت، بارگذاری تنبل، و تقسیم کد را پوشش می‌دهد.</p><p>نحوه شناسایی و رفع گلوگاه‌های متداول عملکرد در برنامه‌های ری‌اکت خود را بیاموزید.</p>",
        excerpt: "استراتژی‌های کلیدی و بهترین شیوه‌ها را برای بهبود قابل توجه عملکرد برنامه‌های ری‌اکت خود بیاموزید.",
        publishedAt: "2023-04-22T10:00:00.000Z",
        category: "توسعه",
        readTime: "۱۲ دقیقه مطالعه",
        locale: "fa",
        featuredImage: {
          data: {
            id: 2,
            attributes: {
              url: "/placeholder/react-performance.jpg",
              formats: {
                thumbnail: { url: "/placeholder/react-performance-thumb.jpg" },
                small: { url: "/placeholder/react-performance-small.jpg" },
                medium: { url: "/placeholder/react-performance-medium.jpg" },
              }
            }
          }
        },
        author: {
          data: {
            id: 1,
            attributes: {
              name: "عرفان اسدی",
              email: "contact@erfanasadi.dev"
            }
          }
        },
        localizations: {
          data: [
            {
              id: 2,
              attributes: {
                locale: "en"
              }
            }
          ]
        }
      }
    },
    {
      id: 103,
      attributes: {
        title: "اخلاق در پژوهش یادگیری ماشین",
        slug: "ethics-machine-learning-research",
        content: "<p>همچنان که یادگیری ماشین به طور فزاینده‌ای در سیستم‌های حیاتی و فرآیندهای تصمیم‌گیری ادغام می‌شود، ملاحظات اخلاقی هرگز مهم‌تر از این نبوده‌اند.</p><p>این مقاله اصول اخلاقی که باید تحقیقات و استقرار یادگیری ماشین را هدایت کنند، از جمله انصاف، پاسخگویی، شفافیت و مسئولیت‌پذیری، بررسی می‌کند.</p>",
        excerpt: "بررسی ملاحظات اخلاقی مهمی که باید تحقیق و استقرار سیستم‌های یادگیری ماشین را هدایت کنند.",
        publishedAt: "2023-03-15T10:00:00.000Z",
        category: "اخلاق هوش مصنوعی",
        readTime: "۱۰ دقیقه مطالعه",
        locale: "fa",
        featuredImage: {
          data: {
            id: 3,
            attributes: {
              url: "/placeholder/ai-ethics.jpg",
              formats: {
                thumbnail: { url: "/placeholder/ai-ethics-thumb.jpg" },
                small: { url: "/placeholder/ai-ethics-small.jpg" },
                medium: { url: "/placeholder/ai-ethics-medium.jpg" },
              }
            }
          }
        },
        author: {
          data: {
            id: 1,
            attributes: {
              name: "عرفان اسدی",
              email: "contact@erfanasadi.dev"
            }
          }
        },
        localizations: {
          data: [
            {
              id: 3,
              attributes: {
                locale: "en"
              }
            }
          ]
        }
      }
    }
  ],
  meta: {
    pagination: {
      page: 1,
      pageSize: 3,
      pageCount: 1,
      total: 3
    }
  }
};

// Function to get fallback post by slug
export function getFallbackPostBySlug(slug: string, locale: string): StrapiResponse<BlogPost[]> {
  const posts = locale === 'en' ? fallbackBlogPostsEn.data : fallbackBlogPostsFa.data;
  const post = posts.find(p => p.attributes.slug === slug);
  
  return {
    data: post ? [post] : [],
    meta: { pagination: { page: 1, pageSize: 1, pageCount: post ? 1 : 0, total: post ? 1 : 0 } }
  };
}

// Function to get related posts
export function getFallbackRelatedPosts(postId: number, category: string, locale: string): StrapiResponse<BlogPost[]> {
  const posts = locale === 'en' ? fallbackBlogPostsEn.data : fallbackBlogPostsFa.data;
  const relatedPosts = posts.filter(p => p.id !== postId && p.attributes.category === category);
  
  return {
    data: relatedPosts,
    meta: { pagination: { page: 1, pageSize: relatedPosts.length, pageCount: 1, total: relatedPosts.length } }
  };
}