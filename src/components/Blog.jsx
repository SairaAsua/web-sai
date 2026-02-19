import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Blog = () => {
  const [expandedPosts, setExpandedPosts] = React.useState({});
  const { t } = useLanguage();

  const toggleExpand = (id) => {
    setExpandedPosts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const posts = [
    {
      id: 1,
      title: t('blog.posts.post1.title'),
      subtitle: t('blog.posts.post1.subtitle'),
      date: "15 Oct 2024",
      author: "Equipo SAI",
      category: t('blog.posts.post1.category'),
      image: "https://horizons-cdn.hostinger.com/a9cf557e-e310-48ca-81f8-588f294b0695/64ce67e004469ba3fe8f1d383c2898da.jpg",
      content: t('blog.posts.post1.content')
    },
    {
      id: 2,
      title: t('blog.posts.post2.title'),
      subtitle: t('blog.posts.post2.subtitle'),
      date: "02 Nov 2024",
      author: "Coordinación Operativa",
      category: t('blog.posts.post2.category'),
      image: "https://horizons-cdn.hostinger.com/a9cf557e-e310-48ca-81f8-588f294b0695/c61d85d5896354e70ec1c8cfbf0c8465.jpg",
      content: t('blog.posts.post2.content')
    },
    {
      id: 3,
      title: t('blog.posts.post3.title'),
      subtitle: t('blog.posts.post3.subtitle'),
      date: "20 Nov 2024",
      author: "Ingeniería de Campo",
      category: t('blog.posts.post3.category'),
      image: "https://horizons-cdn.hostinger.com/a9cf557e-e310-48ca-81f8-588f294b0695/8f2c8e494d75647a70b619506dcac2ff.jpg",
      content: t('blog.posts.post3.content')
    },
    {
      id: 4,
      title: t('blog.posts.post4.title'),
      subtitle: t('blog.posts.post4.subtitle'),
      date: "05 Dic 2024",
      author: "Comunicación",
      category: t('blog.posts.post4.category'),
      image: "https://horizons-cdn.hostinger.com/a9cf557e-e310-48ca-81f8-588f294b0695/1aa11020391405276389ceeadbd20f04.jpg",
      content: t('blog.posts.post4.content')
    },
    {
      id: 5,
      title: t('blog.posts.post5.title'),
      subtitle: t('blog.posts.post5.subtitle'),
      date: "10 Dic 2024",
      author: "I+D",
      category: t('blog.posts.post5.category'),
      image: "https://horizons-cdn.hostinger.com/a9cf557e-e310-48ca-81f8-588f294b0695/730526e1ac40d2fcb9515c16e2c1f5a7.jpg",
      content: t('blog.posts.post5.content')
    },
    {
      id: 6,
      title: t('blog.posts.post6.title'),
      subtitle: t('blog.posts.post6.subtitle'),
      date: "15 Dic 2024",
      author: "Impacto Social",
      category: t('blog.posts.post6.category'),
      image: "https://horizons-cdn.hostinger.com/a9cf557e-e310-48ca-81f8-588f294b0695/edbd160e77013769c0caedc647277d16.jpg",
      content: t('blog.posts.post6.content')
    },
    {
      id: 7,
      title: t('blog.posts.post7.title'),
      subtitle: t('blog.posts.post7.subtitle'),
      date: "20 Dic 2024",
      author: "Ingeniería",
      category: t('blog.posts.post7.category'),
      image: "https://horizons-cdn.hostinger.com/a9cf557e-e310-48ca-81f8-588f294b0695/928dade598a3ff31e368737d69e1b926.jpg",
      content: t('blog.posts.post7.content')
    }
  ];

  return (
    <section className="py-24 bg-[#0B2822] min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-white mb-6">
            {t('blog.title')}
          </h1>
          <p className="text-lg text-[#F5F6FA]/70 max-w-2xl mx-auto font-roboto">
            {t('blog.subtitle')}
          </p>
        </motion.div>

        <div className="flex flex-col gap-16 max-w-5xl mx-auto">
          {posts.map((post, index) => (
            <motion.article 
              key={post.id}
              className="flex flex-col md:flex-row gap-8 bg-[#F5F6FA]/5 rounded-2xl overflow-hidden border border-[#F5F6FA]/10 hover:border-[#FF5C00]/30 transition-colors duration-300 shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden flex-shrink-0">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#FF5C00] text-white text-xs font-bold px-3 py-1 rounded shadow-lg uppercase tracking-wider font-mono">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="flex-1 p-6 md:p-8 flex flex-col">
                <div className="flex items-center gap-4 text-xs font-mono text-[#F5F6FA]/50 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-white mb-2 leading-tight">
                  {post.title}
                </h2>
                <h3 className="text-lg text-[#FF5C00] font-medium mb-6 font-roboto">
                  {post.subtitle}
                </h3>

                {expandedPosts[post.id] && (
                  <div className="text-[#F5F6FA]/80 font-roboto leading-relaxed space-y-4 text-sm md:text-base mb-6">
                    {post.content.split('\n').filter(p => p.trim() !== '').map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                )}

                <div className="mt-auto pt-6 border-t border-[#F5F6FA]/10 flex items-center justify-between">
                  <div className="flex gap-2">
                    {['SAI', 'Tecnología', post.category].map((tag, i) => (
                      <div key={i} className="flex items-center gap-1 text-[10px] bg-[#F5F6FA]/5 px-2 py-1 rounded-full text-[#F5F6FA]/60">
                        <Tag className="w-3 h-3" />
                        {tag}
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={() => toggleExpand(post.id)}
                    className="text-[#FF5C00] text-sm font-bold flex items-center gap-1 hover:opacity-80 transition-opacity"
                  >
                    {expandedPosts[post.id] ? t('blog.close') : t('blog.readMore')} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;