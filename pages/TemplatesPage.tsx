
import React, { useState } from 'react';
import { TEMPLATES } from '../constants';
import type { Template } from '../types';

const categories = ['All', 'Promo', 'Social', 'Ads', 'Intros'];

const TemplatesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredTemplates: Template[] = activeCategory === 'All'
    ? TEMPLATES
    : TEMPLATES.filter(template => template.category === activeCategory);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Find Your Perfect Starting Point
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-slate-600 dark:text-slate-400">
          Browse our library of professionally designed, fully customizable video templates.
        </p>
      </div>

      <div className="mt-12 flex justify-center flex-wrap gap-2 sm:gap-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 ${
              activeCategory === category
                ? 'bg-brand-cyan-500 text-white shadow-lg'
                : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredTemplates.map(template => (
          <div key={template.id} className="group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="relative">
              <img src={template.imageUrl} alt={template.title} className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
              </div>
            </div>
            <div className="p-4 bg-white dark:bg-slate-900">
              <h3 className="font-semibold text-slate-900 dark:text-white">{template.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{template.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplatesPage;
