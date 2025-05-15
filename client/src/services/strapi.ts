import axios from 'axios';

// Define the base URL for the Strapi API
const STRAPI_API_URL = import.meta.env.VITE_STRAPI_API_URL || 'http://localhost:1337/api';

// Create an axios instance for Strapi
const strapiAPI = axios.create({
  baseURL: STRAPI_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Types for blog posts
export interface StrapiImage {
  data: {
    id: number;
    attributes: {
      url: string;
      formats: {
        thumbnail: { url: string };
        small: { url: string };
        medium: { url: string };
        large?: { url: string };
      };
    };
  };
}

export interface StrapiAuthor {
  data: {
    id: number;
    attributes: {
      name: string;
      email: string;
      avatar?: StrapiImage;
    };
  };
}

export interface BlogPostAttributes {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  publishedAt: string;
  category: string;
  readTime: string;
  locale: string;
  featuredImage: StrapiImage;
  author: StrapiAuthor;
  localizations?: {
    data: Array<{
      id: number;
      attributes: {
        locale: string;
      };
    }>;
  };
}

export interface BlogPost {
  id: number;
  attributes: BlogPostAttributes;
}

export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

/**
 * Get all blog posts with the specified locale
 * @param locale The locale to fetch (e.g., 'en', 'fa')
 * @param page The page number for pagination
 * @param pageSize The number of posts per page
 */
export const getBlogPosts = async (
  locale: string = 'en',
  page: number = 1,
  pageSize: number = 10
): Promise<StrapiResponse<BlogPost[]>> => {
  try {
    const response = await strapiAPI.get('/blog-posts', {
      params: {
        locale,
        'pagination[page]': page,
        'pagination[pageSize]': pageSize,
        'sort': 'publishedAt:desc',
        'populate': '*',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
};

/**
 * Get a single blog post by slug and locale
 * @param slug The slug of the blog post
 * @param locale The locale to fetch (e.g., 'en', 'fa')
 */
export const getBlogPostBySlug = async (
  slug: string,
  locale: string = 'en'
): Promise<StrapiResponse<BlogPost[]>> => {
  try {
    const response = await strapiAPI.get('/blog-posts', {
      params: {
        locale,
        'filters[slug][$eq]': slug,
        'populate': '*',
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error);
    throw error;
  }
};

/**
 * Get all blog categories with the specified locale
 * @param locale The locale to fetch (e.g., 'en', 'fa')
 */
export const getBlogCategories = async (
  locale: string = 'en'
): Promise<StrapiResponse<any[]>> => {
  try {
    const response = await strapiAPI.get('/categories', {
      params: {
        locale,
        'populate': '*',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching blog categories:', error);
    throw error;
  }
};

/**
 * Get related blog posts
 * @param postId The ID of the current post to exclude
 * @param categoryName The category to match for related posts
 * @param locale The locale to fetch (e.g., 'en', 'fa')
 * @param limit The number of related posts to fetch
 */
export const getRelatedBlogPosts = async (
  postId: number,
  categoryName: string,
  locale: string = 'en',
  limit: number = 3
): Promise<StrapiResponse<BlogPost[]>> => {
  try {
    const response = await strapiAPI.get('/blog-posts', {
      params: {
        locale,
        'filters[id][$ne]': postId,
        'filters[category][$eq]': categoryName,
        'pagination[limit]': limit,
        'sort': 'publishedAt:desc',
        'populate': '*',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching related blog posts:', error);
    throw error;
  }
};

/**
 * Get the URLs for blog post images
 * @param image The Strapi image object
 * @param size The size of the image to get
 */
export const getImageUrl = (image: StrapiImage | null, size: 'thumbnail' | 'small' | 'medium' | 'large' | 'original' = 'medium'): string => {
  if (!image || !image.data) {
    return '';
  }
  
  const baseUrl = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';
  
  if (size === 'original') {
    return `${baseUrl}${image.data.attributes.url}`;
  }
  
  const format = image.data.attributes.formats[size];
  return format ? `${baseUrl}${format.url}` : `${baseUrl}${image.data.attributes.url}`;
};

export default {
  getBlogPosts,
  getBlogPostBySlug,
  getBlogCategories,
  getRelatedBlogPosts,
  getImageUrl,
};