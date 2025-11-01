
import React from 'react';
import type { Page } from '../types';

interface FooterProps {
  navigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const handleNavClick = (e: React.MouseEvent, page: Page) => {
    e.preventDefault();
    navigate(page);
  };

  return (
    <footer className="bg-slate-100 dark:bg-slate-950/50 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <a href="#" onClick={(e) => handleNavClick(e, 'home')} className="text-2xl font-bold text-slate-900 dark:text-white">
              ProVideo
            </a>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
              Make cinematic videos — fast.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white tracking-wider uppercase">Product</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" onClick={(e) => handleNavClick(e, 'features')} className="text-base text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">Features</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'templates')} className="text-base text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">Templates</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'pricing')} className="text-base text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" onClick={(e) => handleNavClick(e, 'learn')} className="text-base text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">Tutorials</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'learn')} className="text-base text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">Blog</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'contact')} className="text-base text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" onClick={(e) => handleNavClick(e, 'about')} className="text-base text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">About Us</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'contact')} className="text-base text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">Contact</a></li>
              <li><a href="#" className="text-base text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-slate-500 dark:text-slate-400">&copy; {new Date().getFullYear()} ProVideo, Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
             <a href="#" className="text-slate-400 hover:text-slate-500 dark:hover:text-white"><span className="sr-only">Twitter</span><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg></a>
             <a href="#" className="text-slate-400 hover:text-slate-500 dark:hover:text-white"><span className="sr-only">YouTube</span><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.78 22 12 22 12s0 3.22-.42 4.814a2.506 2.506 0 0 1-1.768 1.768c-1.594.42-7.812.42-7.812.42s-6.218 0-7.812-.42a2.506 2.506 0 0 1-1.768-1.768C2 15.22 2 12 2 12s0-3.22.42-4.814a2.506 2.506 0 0 1 1.768-1.768C5.782 5 12 5 12 5s6.218 0 7.812.418zM9.75 15.5V8.5l6.5 3.5-6.5 3.5z" clipRule="evenodd" /></svg></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
