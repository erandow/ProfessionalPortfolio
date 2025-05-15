import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { getBlogPosts, getBlogPostBySlug, getRelatedBlogPosts, BlogPost, StrapiResponse } from '../services/strapi';

/**
 * Hook to fetch blog posts based on the current language
 */
export function useBlogPosts(page: number = 1, pageSize: number = 10) {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return useQuery<StrapiResponse<BlogPost[]>, Error>({
    queryKey: ['blog-posts', currentLanguage, page, pageSize],
    queryFn: () => getBlogPosts(currentLanguage, page, pageSize),
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
  });
}

/**
 * Hook to fetch a single blog post by slug based on the current language
 */
export function useBlogPostBySlug(slug: string) {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return useQuery<StrapiResponse<BlogPost[]>, Error>({
    queryKey: ['blog-post', slug, currentLanguage],
    queryFn: () => getBlogPostBySlug(slug, currentLanguage),
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
    enabled: !!slug, // Only run query if slug is provided
  });
}

/**
 * Hook to fetch related blog posts based on the current language
 */
export function useRelatedBlogPosts(postId: number, categoryName: string, limit: number = 3) {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return useQuery<StrapiResponse<BlogPost[]>, Error>({
    queryKey: ['related-blog-posts', postId, categoryName, currentLanguage],
    queryFn: () => getRelatedBlogPosts(postId, categoryName, currentLanguage, limit),
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
    enabled: !!postId && !!categoryName, // Only run query if postId and categoryName are provided
  });
}