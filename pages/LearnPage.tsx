
import React from 'react';

const articles = [
  { id: 1, title: '5 Tips for Cinematic Color Grading', category: 'Tutorial', imageUrl: 'https://picsum.photos/seed/learn1/500/281' },
  { id: 2, title: 'The Ultimate Guide to Social Media Video Sizes', category: 'Guide', imageUrl: 'https://picsum.photos/seed/learn2/500/281' },
  { id: 3, title: 'How AI is Changing Video Editing', category: 'Blog', imageUrl: 'https://picsum.photos/seed/learn3/500/281' },
  { id: 4, title: 'Mastering Transitions: A Beginner\'s Guide', category: 'Tutorial', imageUrl: 'https://picsum.photos/seed/learn4/500/281' },
  { id: 5, title: 'Creating Your First Promo Video', category: 'Guide', imageUrl: 'https://picsum.photos/seed/learn5/500/281' },
  { id: 6, title: 'Our Latest Feature Updates', category: 'Blog', imageUrl: 'https://picsum.photos/seed/learn6/500/281' },
]

const LearnPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Learn & Get Inspired
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-slate-600 dark:text-slate-400">
          Master the craft of video editing with our expert tutorials, in-depth guides, and articles on the latest trends.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {articles.map(article => (
          <div key={article.id} className="group cursor-pointer bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <img src={article.imageUrl} alt={article.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <span className="text-sm font-semibold text-brand-cyan-500">{article.category}</span>
              <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-cyan-600 dark:group-hover:text-brand-cyan-400 transition-colors">
                {article.title}
              </h3>
              <p className="mt-4 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-white">Read More &rarr;</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnPage;
