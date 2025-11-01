
import React from 'react';
import { FEATURES } from '../constants';

const FeaturesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Powerful Features, Simple Interface
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-slate-600 dark:text-slate-400">
          We've packed our editor with professional-grade tools designed to be intuitive for everyone, from beginners to seasoned pros.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {FEATURES.map((feature, index) => (
          <div key={index} className="flex flex-col items-start p-8 border border-slate-200 dark:border-slate-800 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white dark:bg-slate-900">
            <div className="p-3 bg-brand-cyan-100/50 dark:bg-brand-cyan-900/50 rounded-lg">
                {feature.icon}
            </div>
            <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">{feature.title}</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">{feature.description}</p>
          </div>
        ))}
        {/* Add more detailed features */}
         <div className="flex flex-col items-start p-8 border border-slate-200 dark:border-slate-800 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white dark:bg-slate-900">
            <div className="p-3 bg-brand-cyan-100/50 dark:bg-brand-cyan-900/50 rounded-lg">
                {/* Placeholder Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-brand-cyan-400"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">Stock Asset Library</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">Access millions of royalty-free images, video clips, and audio tracks directly within the editor.</p>
        </div>
        <div className="flex flex-col items-start p-8 border border-slate-200 dark:border-slate-800 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white dark:bg-slate-900">
            <div className="p-3 bg-brand-cyan-100/50 dark:bg-brand-cyan-900/50 rounded-lg">
                 {/* Placeholder Icon */}
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-brand-cyan-400"><path strokeLinecap="round" strokeLinejoin="round" d="M4.034 16.5a1.5 1.5 0 01-2.227-1.802l3.05-7.318a1.5 1.5 0 012.227 1.802l-3.05 7.318zM17.25 10.5c-1.242 0-2.25.078-2.25.166 0 .088 1.008.166 2.25.166s2.25-.078 2.25-.166c0-.088-1.008-.166-2.25-.166zM15 13.5c-1.242 0-2.25.078-2.25.166 0 .088 1.008.166 2.25.166s2.25-.078 2.25-.166c0-.088-1.008-.166-2.25-.166zm3 3c-1.242 0-2.25.078-2.25.166 0 .088 1.008.166 2.25.166s2.25-.078 2.25-.166c0-.088-1.008-.166-2.25-.166z" /></svg>
            </div>
            <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">Color Grading</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">Fine-tune your video's look with advanced color correction tools, filters, and LUT support.</p>
        </div>
        <div className="flex flex-col items-start p-8 border border-slate-200 dark:border-slate-800 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white dark:bg-slate-900">
            <div className="p-3 bg-brand-cyan-100/50 dark:bg-brand-cyan-900/50 rounded-lg">
                 {/* Placeholder Icon */}
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-brand-cyan-400"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-2.25 3h5.25" /></svg>
            </div>
            <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">Text & Titles</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">Add beautiful, animated text and titles to your videos with our easy-to-use text editor and presets.</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
