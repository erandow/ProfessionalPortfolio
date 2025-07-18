import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { format, parseISO } from "date-fns";
import { useBlogPosts } from "../hooks/use-blog";
import { getImageUrl } from "../services/strapi";
import { Skeleton } from "@/components/ui/skeleton";
import { useLanguageRoute } from "../hooks/use-language-route";

export default function BlogSection() {
  const { t, i18n } = useTranslation();
  const { currentLanguage } = useLanguageRoute();
  const isRTL = i18n.dir() === 'rtl';
  const { data, isLoading, error } = useBlogPosts(1, 3); // Fetch first 3 posts for the homepage
  
  // Base URL for the current language
  const baseUrl = `/${currentLanguage}`;
  
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
    <section id="blog" className="py-20" dir={i18n.dir()}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('blog.title')}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </motion.div>

        {isLoading ? (
          // Loading skeleton
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((key) => (
              <div key={key} className="bg-background rounded-lg overflow-hidden border shadow-sm h-full flex flex-col">
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
        ) : (
          // Blog posts grid
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data?.data?.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
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
        )}

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href={`${baseUrl}/blog`}>
              {isRTL ? (
                <>
                  <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                  {t('blog.viewAll')}
                </>
              ) : (
                <>
                  {t('blog.viewAll')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}