import axios from 'axios';
import { fallbackBlogPostsEn, fallbackBlogPostsFa, getFallbackPostBySlug, getFallbackRelatedPosts } from './fallback-data';

// Define the base URL for the Strapi API
const STRAPI_API_URL = import.meta.env.VITE_STRAPI_API_URL || 'http://localhost:1337/api';

// Flag to use fallback data during development when Strapi is not available
const USE_FALLBACK = import.meta.env.MODE === 'development' && !import.meta.env.VITE_STRAPI_URL;

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
  // Use fallback data if enabled or in development mode without Strapi
  if (USE_FALLBACK) {
    console.log('Using fallback blog posts data for locale:', locale);
    return locale === 'en' ? fallbackBlogPostsEn : fallbackBlogPostsFa;
  }
  
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
    
    // Fall back to sample data in development when API is unavailable
    if (import.meta.env.MODE === 'development') {
      console.log('Falling back to sample blog posts data');
      return locale === 'en' ? fallbackBlogPostsEn : fallbackBlogPostsFa;
    }
    
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
  // Use fallback data if enabled
  if (USE_FALLBACK) {
    console.log('Using fallback blog post data for slug:', slug, 'locale:', locale);
    return getFallbackPostBySlug(slug, locale);
  }
  
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
    
    // Fall back to sample data in development when API is unavailable
    if (import.meta.env.MODE === 'development') {
      console.log('Falling back to sample blog post data');
      return getFallbackPostBySlug(slug, locale);
    }
    
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
  // Categories are just used from the existing blog posts in fallback mode
  if (USE_FALLBACK) {
    console.log('Using fallback blog categories data');
    return { data: [], meta: {} };
  }
  
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
    
    // Return empty data in development
    if (import.meta.env.MODE === 'development') {
      console.log('Falling back to empty categories data');
      return { data: [], meta: {} };
    }
    
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
  // Use fallback data if enabled
  if (USE_FALLBACK) {
    console.log('Using fallback related posts data');
    return getFallbackRelatedPosts(postId, categoryName, locale);
  }
  
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
    
    // Fall back to sample data in development when API is unavailable
    if (import.meta.env.MODE === 'development') {
      console.log('Falling back to sample related posts data');
      return getFallbackRelatedPosts(postId, categoryName, locale);
    }
    
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
    // Return a placeholder image if no image is available
    return 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3';
  }
  
  // Handle fallback placeholder images that start with /placeholder/
  if (image.data.attributes.url.startsWith('/placeholder/')) {
    // For fallback data, return Unsplash images based on the placeholder name
    const imageName = image.data.attributes.url.split('/').pop()?.split('.')[0] || '';
    
    // Map of fallback image names to Unsplash image URLs
    const fallbackImageMap: Record<string, string> = {
      'ai-web-dev': 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'react-performance': 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'ai-ethics': 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    };
    
    return fallbackImageMap[imageName] || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3';
  }
  
  // For real Strapi images
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