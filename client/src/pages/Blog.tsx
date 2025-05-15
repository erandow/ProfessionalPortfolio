import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, ArrowRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Pagination } from '@/components/ui/pagination';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import { format, parseISO } from 'date-fns';
import { useBlogPosts } from '../hooks/use-blog';
import { getImageUrl } from '../services/strapi';
import MainLayout from '../layouts/MainLayout';
import { useLanguageRoute } from '../hooks/use-language-route';

export default function Blog() {
  const { t, i18n } = useTranslation();
  const [, setLocation] = useLocation();
  const { currentLanguage } = useLanguageRoute();
  const isRTL = i18n.dir() === 'rtl';
  const baseUrl = currentLanguage === 'en' ? '/en' : '/fa';
  
  // State for pagination and filtering
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const pageSize = 9;
  
  // Get blog posts
  const { data, isLoading, error } = useBlogPosts(page, pageSize);
  
  // Format date based on current language
  const formatDate = (dateString: string) => {
    try {
      const date = parseISO(dateString);
      return format(date, 'MMMM d, yyyy');
    } catch (e) {
      return dateString;
    }
  };
  
  return (
    <MainLayout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('blog.title')}</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {t('blog.subtitle')}
            </p>
          </motion.div>
          
          {/* Search bar */}
          <div className="mb-12 max-w-md mx-auto">
            <div className="relative">
              <Input
                type="text"
                placeholder={t('blog.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`pl-10 ${isRTL ? 'text-right pr-10 pl-4' : ''}`}
              />
              <Search className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground ${isRTL ? 'right-3' : 'left-3'}`} />
            </div>
          </div>
          
          {isLoading ? (
            // Loading skeleton
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="bg-background rounded-lg overflow-hidden border shadow-sm h-full flex flex-col">
                  <Skeleton className="aspect-[16/9] w-full" />
                  <div className="p-6 flex-1 flex flex-col space-y-4">
                    <div className="flex space-x-4">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-10 w-28" />
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            // Error state
            <div className="text-center py-10">
              <p className="text-red-500 mb-4">{t('blog.error')}</p>
              <Button onClick={() => window.location.reload()}>
                {t('common.retry')}
              </Button>
            </div>
          ) : data?.data?.length === 0 ? (
            // No posts found
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-4">{t('blog.noPosts')}</h3>
              <p className="text-muted-foreground">{t('blog.tryDifferentSearch')}</p>
            </div>
          ) : (
            // Blog posts grid
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data?.data?.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-background rounded-lg overflow-hidden border shadow-sm h-full flex flex-col">
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <img 
                          src={getImageUrl(post.attributes.featuredImage, 'medium')}
                          alt={post.attributes.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'}`}>
                          <Badge className="bg-primary hover:bg-primary/90 text-primary-foreground">
                            {post.attributes.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className={`flex text-sm text-muted-foreground ${isRTL ? 'space-x-reverse' : 'space-x-4'} mb-3`}>
                          <span className="flex items-center">
                            <Calendar className={`w-4 h-4 ${isRTL ? 'ml-1' : 'mr-1'}`} />
                            {formatDate(post.attributes.publishedAt)}
                          </span>
                          <span className="flex items-center">
                            <Clock className={`w-4 h-4 ${isRTL ? 'ml-1' : 'mr-1'}`} />
                            {post.attributes.readTime}
                          </span>
                        </div>
                        <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                          {post.attributes.title}
                        </h3>
                        <p className="text-muted-foreground mb-5 flex-1">
                          {post.attributes.excerpt}
                        </p>
                        <div className="mt-auto">
                          <Button 
                            variant="ghost" 
                            className={`p-0 hover:bg-transparent hover:text-primary ${isRTL ? '-mr-3' : '-ml-3'}`} 
                            asChild
                          >
                            <a 
                              href={`${baseUrl}/blog/${post.attributes.slug}`} 
                              className="flex items-center"
                            >
                              {isRTL ? (
                                <>
                                  <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                                  {t('blog.readMore')}
                                </>
                              ) : (
                                <>
                                  {t('blog.readMore')}
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </>
                              )}
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Pagination */}
              {data?.meta?.pagination && data.meta.pagination.pageCount > 1 && (
                <div className="mt-12 flex justify-center">
                  <Pagination>
                    <Pagination.Content>
                      <Pagination.Item>
                        <Pagination.Previous
                          onClick={() => setPage(Math.max(1, page - 1))}
                          disabled={page === 1}
                        />
                      </Pagination.Item>
                      
                      {[...Array(data.meta.pagination.pageCount)].map((_, i) => (
                        <Pagination.Item key={i}>
                          <Pagination.Link
                            isActive={page === i + 1}
                            onClick={() => setPage(i + 1)}
                          >
                            {i + 1}
                          </Pagination.Link>
                        </Pagination.Item>
                      ))}
                      
                      <Pagination.Item>
                        <Pagination.Next
                          onClick={() => setPage(Math.min(data.meta.pagination.pageCount, page + 1))}
                          disabled={page === data.meta.pagination.pageCount}
                        />
                      </Pagination.Item>
                    </Pagination.Content>
                  </Pagination>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </MainLayout>
  );
}