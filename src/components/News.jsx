import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useLanguage } from '@/context/LanguageContext';

const News = () => {
  const { toast } = useToast();
  const { t } = useLanguage();

  const newsItems = [
    {
      title: t('news.items.item1.title'),
      date: '15/01/2025',
      category: t('news.items.item1.category'),
      excerpt: t('news.items.item1.excerpt'),
      image: 'https://images.unsplash.com/photo-1595872018818-97555653a011'
    },
    {
      title: t('news.items.item2.title'),
      date: '08/01/2025',
      category: t('news.items.item2.category'),
      excerpt: t('news.items.item2.excerpt'),
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
    },
    {
      title: t('news.items.item3.title'),
      date: '28/12/2024',
      category: t('news.items.item3.category'),
      excerpt: t('news.items.item3.excerpt'),
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71'
    }
  ];

  const handleReadMore = () => {
    toast({
      title: t('news.toastTitle'),
      description: t('news.toastDesc'),
      className: "bg-[#0B2822] border-[#FF5C00] text-white"
    });
  };

  return (
    <section id="news" className="py-24 bg-[#0B2822] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-white mb-4">
            {t('news.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.article
              key={index}
              className="glass-panel rounded-xl overflow-hidden hover:border-[#FF5C00]/50 transition-all duration-300 flex flex-col group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0" alt={item.title} src={item.image} />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#FF5C00] text-white text-[10px] font-mono font-bold px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs font-mono text-[#F5F6FA]/50 mb-3">
                  <Calendar className="w-3 h-3" />
                  <span>{item.date}</span>
                </div>

                <h3 className="text-xl font-bold font-montserrat text-white mb-3 leading-tight group-hover:text-[#FF5C00] transition-colors">
                  {item.title}
                </h3>

                <p className="text-[#F5F6FA]/70 mb-6 flex-grow font-roboto text-sm">
                  {item.excerpt}
                </p>

                <Button
                  variant="ghost"
                  className="text-[#FF5C00] hover:text-[#FF5C00] hover:bg-[#FF5C00]/10 p-0 h-auto justify-start gap-2 font-mono text-sm uppercase tracking-wide"
                  onClick={handleReadMore}
                >
                  {t('news.readMore')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;