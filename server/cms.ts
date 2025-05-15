import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { v4 as uuidv4 } from 'uuid';
import { getBlogPostsFromNotion, findDatabaseByTitle } from './notion';

// Define current directory equivalent to __dirname in CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  publishedAt: string;
  category: string;
  readTime: string;
  locale: string;
  featuredImage: string; // URL to the image
  author: {
    name: string;
    email: string;
  };
  localizations?: {
    locale: string;
    id: string;
  }[];
}

interface BlogPostsResponse {
  data: {
    id: string;
    attributes: {
      title: string;
      slug: string;
      content: string;
      excerpt: string;
      publishedAt: string;
      category: string;
      readTime: string;
      locale: string;
      featuredImage: {
        data: {
          id: string;
          attributes: {
            url: string;
            formats: {
              thumbnail: { url: string };
              small: { url: string };
              medium: { url: string };
            }
          }
        }
      };
      author: {
        data: {
          id: string;
          attributes: {
            name: string;
            email: string;
          }
        }
      };
      localizations?: {
        data: Array<{
          id: string;
          attributes: {
            locale: string;
          }
        }>
      };
    }
  }[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    }
  };
}

// Data directory
const DATA_DIR = path.join(__dirname, 'data');
const BLOG_POSTS_FILE = path.join(DATA_DIR, 'blog-posts.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Initialize blog posts if file doesn't exist
if (!fs.existsSync(BLOG_POSTS_FILE)) {
  const englishPosts: BlogPost[] = [
    {
      id: uuidv4(),
      title: "The Future of AI in Web Development",
      slug: "future-ai-web-development",
      content: "<p>Artificial intelligence is rapidly transforming the web development landscape. From automated coding assistants to intelligent design systems, AI is revolutionizing how we build and interact with web applications.</p><p>This article explores the current state of AI in web development and makes predictions about where the technology is headed in the near future.</p>",
      excerpt: "Exploring how artificial intelligence is revolutionizing the way we build and interact with web applications.",
      publishedAt: new Date().toISOString(),
      category: "Technology",
      readTime: "8 min read",
      locale: "en",
      featuredImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      author: {
        name: "Erfan Asadi",
        email: "contact@erfanasadi.dev"
      }
    },
    {
      id: uuidv4(),
      title: "Optimizing Performance in React Applications",
      slug: "optimizing-react-performance",
      content: "<p>Performance optimization is crucial for delivering a smooth user experience in React applications. This comprehensive guide covers key strategies including component memoization, lazy loading, and code splitting.</p><p>Learn how to identify and resolve common performance bottlenecks in your React applications.</p>",
      excerpt: "Learn key strategies and best practices to significantly improve the performance of your React applications.",
      publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 15).toISOString(), // 15 days ago
      category: "Development",
      readTime: "12 min read",
      locale: "en",
      featuredImage: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      author: {
        name: "Erfan Asadi",
        email: "contact@erfanasadi.dev"
      }
    },
    {
      id: uuidv4(),
      title: "Ethics in Machine Learning Research",
      slug: "ethics-machine-learning-research",
      content: "<p>As machine learning becomes increasingly integrated into critical systems and decision-making processes, ethical considerations have never been more important.</p><p>This article examines the ethical principles that should guide machine learning research and deployment, including fairness, accountability, transparency, and responsibility.</p>",
      excerpt: "Discussing the important ethical considerations that should guide research and deployment of machine learning systems.",
      publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30).toISOString(), // 30 days ago
      category: "AI Ethics",
      readTime: "10 min read",
      locale: "en",
      featuredImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      author: {
        name: "Erfan Asadi",
        email: "contact@erfanasadi.dev"
      }
    }
  ];

  // Create Persian versions with relationships
  const persianPosts: BlogPost[] = englishPosts.map((post, index) => {
    const id = uuidv4();
    
    // Add localization to English post
    englishPosts[index].localizations = [
      {
        locale: "fa",
        id
      }
    ];
    
    let title, content, excerpt, category, readTime;
    
    switch(post.slug) {
      case "future-ai-web-development":
        title = "آینده هوش مصنوعی در توسعه وب";
        content = "<p>هوش مصنوعی به سرعت در حال تغییر چشم‌انداز توسعه وب است. از دستیاران کدنویسی خودکار گرفته تا سیستم‌های طراحی هوشمند، هوش مصنوعی در حال انقلاب در نحوه ساخت و تعامل ما با برنامه‌های وب است.</p><p>این مقاله وضعیت فعلی هوش مصنوعی در توسعه وب را بررسی می‌کند و پیش‌بینی‌هایی درباره مسیر این فناوری در آینده نزدیک ارائه می‌دهد.</p>";
        excerpt = "بررسی چگونگی انقلاب هوش مصنوعی در نحوه ساخت و تعامل ما با برنامه‌های وب.";
        category = "فناوری";
        readTime = "۸ دقیقه مطالعه";
        break;
      case "optimizing-react-performance":
        title = "بهینه‌سازی عملکرد در برنامه‌های ری‌اکت";
        content = "<p>بهینه‌سازی عملکرد برای ارائه تجربه کاربری روان در برنامه‌های ری‌اکت بسیار مهم است. این راهنمای جامع استراتژی‌های کلیدی شامل مموایزیشن کامپوننت، بارگذاری تنبل، و تقسیم کد را پوشش می‌دهد.</p><p>نحوه شناسایی و رفع گلوگاه‌های متداول عملکرد در برنامه‌های ری‌اکت خود را بیاموزید.</p>";
        excerpt = "استراتژی‌های کلیدی و بهترین شیوه‌ها را برای بهبود قابل توجه عملکرد برنامه‌های ری‌اکت خود بیاموزید.";
        category = "توسعه";
        readTime = "۱۲ دقیقه مطالعه";
        break;
      case "ethics-machine-learning-research":
        title = "اخلاق در پژوهش یادگیری ماشین";
        content = "<p>همچنان که یادگیری ماشین به طور فزاینده‌ای در سیستم‌های حیاتی و فرآیندهای تصمیم‌گیری ادغام می‌شود، ملاحظات اخلاقی هرگز مهم‌تر از این نبوده‌اند.</p><p>این مقاله اصول اخلاقی که باید تحقیقات و استقرار یادگیری ماشین را هدایت کنند، از جمله انصاف، پاسخگویی، شفافیت و مسئولیت‌پذیری، بررسی می‌کند.</p>";
        excerpt = "بررسی ملاحظات اخلاقی مهمی که باید تحقیق و استقرار سیستم‌های یادگیری ماشین را هدایت کنند.";
        category = "اخلاق هوش مصنوعی";
        readTime = "۱۰ دقیقه مطالعه";
        break;
      default:
        title = post.title;
        content = post.content;
        excerpt = post.excerpt;
        category = post.category;
        readTime = post.readTime;
    }
    
    return {
      id,
      title,
      slug: post.slug,
      content,
      excerpt,
      publishedAt: post.publishedAt,
      category,
      readTime,
      locale: "fa",
      featuredImage: post.featuredImage,
      author: {
        name: "عرفان اسدی",
        email: "contact@erfanasadi.dev"
      },
      localizations: [
        {
          locale: "en",
          id: post.id
        }
      ]
    };
  });
  
  // Combine both language posts
  const blogPosts = [...englishPosts, ...persianPosts];
  
  // Save initial data
  fs.writeFileSync(BLOG_POSTS_FILE, JSON.stringify(blogPosts, null, 2));
}

// Helper function to convert blog post to API response format
function formatBlogPost(post: BlogPost) {
  return {
    id: post.id,
    attributes: {
      title: post.title,
      slug: post.slug,
      content: post.content,
      excerpt: post.excerpt,
      publishedAt: post.publishedAt,
      category: post.category,
      readTime: post.readTime,
      locale: post.locale,
      featuredImage: {
        data: {
          id: '1',
          attributes: {
            url: post.featuredImage,
            formats: {
              thumbnail: { url: post.featuredImage },
              small: { url: post.featuredImage },
              medium: { url: post.featuredImage },
            }
          }
        }
      },
      author: {
        data: {
          id: '1',
          attributes: {
            name: post.author.name,
            email: post.author.email
          }
        }
      },
      localizations: post.localizations ? {
        data: post.localizations.map(loc => ({
          id: loc.id,
          attributes: {
            locale: loc.locale
          }
        }))
      } : undefined
    }
  };
}

// Register CMS routes
export function registerCmsRoutes(app: express.Express) {
  // Notion status endpoint
  app.get('/api/notion-status', async (req: Request, res: Response) => {
    try {
      if (!process.env.NOTION_INTEGRATION_SECRET || !process.env.NOTION_PAGE_URL) {
        return res.status(400).json({ 
          status: 'not_configured',
          message: 'Notion integration is not configured. Please set NOTION_INTEGRATION_SECRET and NOTION_PAGE_URL environment variables.'
        });
      }
      
      // Try to find the blog posts database
      const blogDb = await findDatabaseByTitle('Blog Posts');
      
      if (blogDb) {
        // Get a sample of posts from Notion
        try {
          const posts = await getBlogPostsFromNotion(blogDb.id, 'en');
          return res.json({
            status: 'connected',
            message: 'Successfully connected to Notion and found the Blog Posts database',
            databaseId: blogDb.id,
            postCount: posts.length,
            samplePosts: posts.slice(0, 2).map(p => ({ title: p.title, slug: p.slug }))
          });
        } catch (dbError) {
          return res.status(500).json({
            status: 'database_error',
            message: 'Found the Blog Posts database but failed to fetch posts',
            error: String(dbError)
          });
        }
      } else {
        return res.status(404).json({
          status: 'database_not_found',
          message: 'Connected to Notion but Blog Posts database not found. Run the setup script.'
        });
      }
    } catch (error) {
      return res.status(500).json({ 
        status: 'connection_failed',
        message: 'Failed to connect to Notion API',
        error: String(error)
      });
    }
  });

  // Blog post API routes (similar to Strapi)
  app.get('/api/blog-posts', (req: Request, res: Response) => {
    try {
      const locale = req.query.locale as string || 'en';
      const pageStr = req.query['pagination[page]'] as string || '1';
      const pageSizeStr = req.query['pagination[pageSize]'] as string || '10';
      const page = parseInt(pageStr, 10);
      const pageSize = parseInt(pageSizeStr, 10);
      
      // Load blog posts
      const blogPostsData = JSON.parse(fs.readFileSync(BLOG_POSTS_FILE, 'utf8')) as BlogPost[];
      
      // Filter by locale
      const filteredPosts = blogPostsData.filter(post => post.locale === locale);
      
      // Sort by publishedAt (newest first)
      filteredPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
      
      // Paginate
      const startIdx = (page - 1) * pageSize;
      const endIdx = startIdx + pageSize;
      const paginatedPosts = filteredPosts.slice(startIdx, endIdx);
      
      // Format response
      const response: BlogPostsResponse = {
        data: paginatedPosts.map(formatBlogPost),
        meta: {
          pagination: {
            page,
            pageSize,
            pageCount: Math.ceil(filteredPosts.length / pageSize),
            total: filteredPosts.length
          }
        }
      };
      
      res.json(response);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      res.status(500).json({ error: 'Failed to fetch blog posts' });
    }
  });
  
  // Get single blog post by slug
  app.get('/api/blog-posts/:slug', (req: Request, res: Response) => {
    try {
      const { slug } = req.params;
      const locale = req.query.locale as string || 'en';
      
      // Load blog posts
      const blogPostsData = JSON.parse(fs.readFileSync(BLOG_POSTS_FILE, 'utf8')) as BlogPost[];
      
      // Find post by slug and locale
      const post = blogPostsData.find(p => p.slug === slug && p.locale === locale);
      
      if (!post) {
        return res.status(404).json({ error: 'Blog post not found' });
      }
      
      // Format response
      const response: BlogPostsResponse = {
        data: [formatBlogPost(post)],
        meta: {
          pagination: {
            page: 1,
            pageSize: 1,
            pageCount: 1,
            total: 1
          }
        }
      };
      
      res.json(response);
    } catch (error) {
      console.error('Error fetching blog post:', error);
      res.status(500).json({ error: 'Failed to fetch blog post' });
    }
  });
  
  // Admin routes for the CMS
  app.get('/cms', (req: Request, res: Response) => {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfolio CMS</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
      </head>
      <body class="bg-gray-100">
        <div class="container mx-auto p-4">
          <h1 class="text-2xl font-bold mb-4">Portfolio CMS</h1>
          <p class="mb-4">This is the CMS backend for managing blog posts in the portfolio website.</p>
          
          <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <h2 class="text-xl font-semibold mb-2">Notion Integration</h2>
            <p class="mb-2">You can use Notion as your CMS for a better editing experience.</p>
            <div id="notion-status" class="mb-4">
              <div class="animate-pulse bg-gray-200 h-5 w-32 rounded"></div>
            </div>
            <div class="mb-4">
              <h3 class="font-semibold mb-1">Setup Instructions:</h3>
              <ol class="list-decimal list-inside pl-4">
                <li>Go to <a href="https://www.notion.so/my-integrations" target="_blank" class="text-blue-600 hover:underline">https://www.notion.so/my-integrations</a></li>
                <li>Create a new integration with a memorable name</li>
                <li>Copy the integration secret - this will be your <code class="bg-gray-200 px-1 rounded">NOTION_INTEGRATION_SECRET</code></li>
                <li>Open a Notion page (create a new one if needed)</li>
                <li>Click "..." in the top right, go to "connections", and select your integration</li>
                <li>Copy the page URL - this will be your <code class="bg-gray-200 px-1 rounded">NOTION_PAGE_URL</code></li>
                <li>Add these as environment variables in your Replit project</li>
                <li>Run the setup script to create a database and sample blog posts</li>
              </ol>
            </div>
          </div>
          
          <div id="content" class="mt-8">
            <div id="post-list" class="bg-white p-4 rounded shadow"></div>
          </div>
        </div>
        
        <script>
          // Check Notion status
          fetch('/api/notion-status')
            .then(response => response.json())
            .then(data => {
              const statusEl = document.getElementById('notion-status');
              if (data.status === 'connected') {
                statusEl.innerHTML = '<div class="bg-green-100 border-l-4 border-green-500 p-2">' +
                  '<p class="text-green-700"><span class="font-bold">✅ Connected to Notion</span> - ' +
                  'Found Blog Posts database with ' + data.postCount + ' posts</p></div>';
              } else if (data.status === 'database_not_found') {
                statusEl.innerHTML = '<div class="bg-yellow-100 border-l-4 border-yellow-500 p-2">' +
                  '<p class="text-yellow-700"><span class="font-bold">⚠️ Partially Connected</span> - ' +
                  'Connected to Notion but Blog Posts database not found. Run the setup script.</p></div>';
              } else if (data.status === 'database_error') {
                statusEl.innerHTML = '<div class="bg-red-100 border-l-4 border-red-500 p-2">' +
                  '<p class="text-red-700"><span class="font-bold">❌ Database Error</span> - ' +
                  'Found database but failed to fetch posts: ' + data.error + '</p></div>';
              } else if (data.status === 'not_configured') {
                statusEl.innerHTML = '<div class="bg-yellow-100 border-l-4 border-yellow-500 p-2">' +
                  '<p class="text-yellow-700"><span class="font-bold">⚙️ Not Configured</span> - ' +
                  'Notion integration needs configuration. Follow the setup instructions.</p></div>';
              } else {
                statusEl.innerHTML = '<div class="bg-red-100 border-l-4 border-red-500 p-2">' +
                  '<p class="text-red-700"><span class="font-bold">❌ Connection Failed</span> - ' +
                  'Failed to connect to Notion API: ' + data.error + '</p></div>';
              }
            })
            .catch(error => {
              document.getElementById('notion-status').innerHTML = 
                '<div class="bg-red-100 border-l-4 border-red-500 p-2">' +
                '<p class="text-red-700"><span class="font-bold">❌ Error</span> - ' +
                'Could not check Notion status: ' + error + '</p></div>';
            });
        
          // Load blog posts
          fetch('/api/blog-posts?locale=en&pagination[pageSize]=100')
            .then(response => response.json())
            .then(data => {
              const postList = document.getElementById('post-list');
              postList.innerHTML = '<h2 class="text-xl font-semibold mb-4">Blog Posts</h2>';
              
              if (data.data.length === 0) {
                postList.innerHTML += '<p>No blog posts found.</p>';
                return;
              }
              
              const table = document.createElement('table');
              table.className = 'min-w-full border-collapse';
              
              // Table header
              const thead = document.createElement('thead');
              thead.innerHTML = \`
                <tr class="bg-gray-200">
                  <th class="border p-2 text-left">Title</th>
                  <th class="border p-2 text-left">Slug</th>
                  <th class="border p-2 text-left">Locale</th>
                  <th class="border p-2 text-left">Category</th>
                  <th class="border p-2 text-left">Published</th>
                </tr>
              \`;
              table.appendChild(thead);
              
              // Table body
              const tbody = document.createElement('tbody');
              data.data.forEach(post => {
                const row = document.createElement('tr');
                row.className = 'hover:bg-gray-100';
                
                row.innerHTML = \`
                  <td class="border p-2">\${post.attributes.title}</td>
                  <td class="border p-2">\${post.attributes.slug}</td>
                  <td class="border p-2">\${post.attributes.locale}</td>
                  <td class="border p-2">\${post.attributes.category}</td>
                  <td class="border p-2">\${new Date(post.attributes.publishedAt).toLocaleDateString()}</td>
                \`;
                
                tbody.appendChild(row);
              });
              
              table.appendChild(tbody);
              postList.appendChild(table);
            })
            .catch(error => {
              console.error('Error fetching blog posts:', error);
              document.getElementById('post-list').innerHTML = '<p class="text-red-500">Error loading blog posts</p>';
            });
        </script>
      </body>
      </html>
    `);
  });
  
  console.log('✅ CMS routes registered');
  return app;
}