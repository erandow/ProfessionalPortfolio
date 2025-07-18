import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Tags } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { format, parseISO } from 'date-fns';
import { useBlogPostBySlug, useRelatedBlogPosts } from '../hooks/use-blog';
import { getImageUrl } from '../services/strapi';
import MainLayout from '../layouts/MainLayout';
import { useLanguageRoute } from '../hooks/use-language-route';

export default function BlogDetail() {
  const { t, i18n } = useTranslation();
  const [location, setLocation] = useLocation();
  const { currentLanguage } = useLanguageRoute();
  const isRTL = i18n.dir() === 'rtl';
  const baseUrl = `/${currentLanguage}`;
  
  // Get the slug from the URL
  const slug = location.split('/').pop() || '';
  
  // Get blog post data
  const { data, isLoading, error } = useBlogPostBySlug(slug);
  const post = data?.data?.[0];
  
  // Get related posts if we have a post
  const { data: relatedData, isLoading: relatedLoading } = useRelatedBlogPosts(
    post?.id || 0,
    post?.attributes?.category || '',
    3
  );
  
  // Format date based on current language
  const formatDate = (dateString: string) => {
    try {
      const date = parseISO(dateString);
      return format(date, 'MMMM d, yyyy');
    } catch (e) {
      return dateString;
    }
  };
  
  // Check if current post has a translation
  useEffect(() => {
    if (post?.attributes?.localizations?.data?.length) {
      const alternateLocale = currentLanguage === 'en' ? 'fa' : 'en';
      const hasTranslation = post.attributes.localizations.data.some(
        loc => loc.attributes.locale === alternateLocale
      );
      
      // If there's no translation available, we could show a notice here
      console.log(`Has ${alternateLocale} translation:`, hasTranslation);
    }
  }, [post, currentLanguage]);
  
  return (
    <MainLayout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            // Loading skeleton for blog post
            <div className="max-w-4xl mx-auto">
              <Skeleton className="h-64 w-full mb-8" />
              <Skeleton className="h-12 w-3/4 mb-4" />
              <div className="flex items-center space-x-4 mb-8">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div>
                  <Skeleton className="h-4 w-32 mb-2" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4 mb-8" />
            </div>
          ) : error ? (
            // Error state
            <div className="text-center py-10">
              <p className="text-red-500 mb-4">{t('blog.error')}</p>
              <Button onClick={() => window.location.reload()}>
                {t('common.retry')}
              </Button>
            </div>
          ) : !post ? (
            // Post not found
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-4">{t('blog.postNotFound')}</h3>
              <p className="text-muted-foreground mb-8">{t('blog.postNotFoundDesc')}</p>
              <Button 
                variant="default" 
                onClick={() => setLocation(`${baseUrl}/blog`)}
              >
                {isRTL ? (
                  <>
                    <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                    {t('blog.backToBlog')}
                  </>
                ) : (
                  <>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {t('blog.backToBlog')}
                  </>
                )}
              </Button>
            </div>
          ) : (
            // Blog post content
            <div className="max-w-4xl mx-auto">
              {/* Back to blog link */}
              <div className="mb-8">
                <Button 
                  variant="ghost" 
                  onClick={() => setLocation(`${baseUrl}/blog`)}
                  className="group"
                >
                  {isRTL ? (
                    <>
                      <ArrowRight className="mr-2 h-4 w-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                      {t('blog.backToBlog')}
                    </>
                  ) : (
                    <>
                      <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                      {t('blog.backToBlog')}
                    </>
                  )}
                </Button>
              </div>
              
              {/* Featured image */}
              <div className="rounded-lg overflow-hidden mb-8">
                <img 
                  src={getImageUrl(post.attributes.featuredImage, 'large')}
                  alt={post.attributes.title}
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Post header */}
              <div className="mb-8">
                <Badge className="mb-4">{post.attributes.category}</Badge>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.attributes.title}</h1>
                
                <div className={`flex flex-wrap items-center text-sm text-muted-foreground gap-4 mb-6`}>
                  <span className="flex items-center">
                    <Calendar className={`w-4 h-4 ${isRTL ? 'ml-1' : 'mr-1'}`} />
                    {formatDate(post.attributes.publishedAt)}
                  </span>
                  <span className="flex items-center">
                    <Clock className={`w-4 h-4 ${isRTL ? 'ml-1' : 'mr-1'}`} />
                    {post.attributes.readTime}
                  </span>
                  <span className="flex items-center">
                    <User className={`w-4 h-4 ${isRTL ? 'ml-1' : 'mr-1'}`} />
                    {post.attributes.author?.data?.attributes?.name || t('blog.anonymousAuthor')}
                  </span>
                </div>
                
                {/* Author details if available */}
                {post.attributes.author?.data && (
                  <div className="flex items-center space-x-4 mb-8 p-4 bg-muted rounded-lg">
                    <Avatar className="h-12 w-12">
                      {post.attributes.author.data.attributes.avatar ? (
                        <AvatarImage 
                          src={getImageUrl(post.attributes.author.data.attributes.avatar, 'thumbnail')} 
                          alt={post.attributes.author.data.attributes.name} 
                        />
                      ) : (
                        <AvatarFallback>
                          {post.attributes.author.data.attributes.name.charAt(0)}
                        </AvatarFallback>
                      )}
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{post.attributes.author.data.attributes.name}</h3>
                      <p className="text-sm text-muted-foreground">{post.attributes.author.data.attributes.email}</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Post content */}
              <div 
                className="prose prose-lg dark:prose-invert max-w-none mb-12"
                dangerouslySetInnerHTML={{ __html: post.attributes.content }}
              />
              
              {/* Related posts */}
              {relatedData?.data && relatedData.data.length > 0 && (
                <div className="mt-16 border-t pt-12">
                  <h2 className="text-2xl font-bold mb-8">{t('blog.relatedPosts')}</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {relatedData.data.map((relatedPost) => (
                      <motion.div
                        key={relatedPost.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="group"
                      >
                        <div className="bg-background rounded-lg overflow-hidden border shadow-sm h-full flex flex-col">
                          <div className="relative aspect-[16/9] overflow-hidden">
                            <img 
                              src={getImageUrl(relatedPost.attributes.featuredImage, 'small')}
                              alt={relatedPost.attributes.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>
                          <div className="p-4 flex-1 flex flex-col">
                            <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors line-clamp-2">
                              {relatedPost.attributes.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-3 flex-1 line-clamp-2">
                              {relatedPost.attributes.excerpt}
                            </p>
                            <Button 
                              variant="ghost" 
                              className={`p-0 hover:bg-transparent hover:text-primary ${isRTL ? '-mr-2' : '-ml-2'} text-sm`} 
                              asChild
                            >
                              <a 
                                href={`${baseUrl}/blog/${relatedPost.attributes.slug}`} 
                                className="flex items-center"
                              >
                                {isRTL ? (
                                  <>
                                    <ArrowRight className="mr-1 h-4 w-4 rotate-180" />
                                    {t('blog.readMore')}
                                  </>
                                ) : (
                                  <>
                                    {t('blog.readMore')}
                                    <ArrowRight className="ml-1 h-4 w-4" />
                                  </>
                                )}
                              </a>
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}