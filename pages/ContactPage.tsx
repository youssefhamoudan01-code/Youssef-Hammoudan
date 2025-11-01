
import React from 'react';
import { FAQ_ITEMS } from '../constants';
import Button from '../components/Button';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get in Touch
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-slate-600 dark:text-slate-400">
            We're here to help. Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
            </p>
        </div>
        <div className="mt-20 max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
                 <form action="#" method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
                        <div className="mt-1">
                            <input type="text" name="name" id="name" required className="block w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md shadow-sm focus:ring-brand-cyan-500 focus:border-brand-cyan-500 sm:text-sm bg-white dark:bg-slate-800" />
                        </div>
                    </div>
                     <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                        <div className="mt-1">
                            <input type="email" name="email" id="email" required className="block w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md shadow-sm focus:ring-brand-cyan-500 focus:border-brand-cyan-500 sm:text-sm bg-white dark:bg-slate-800" />
                        </div>
                    </div>
                     <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                        <div className="mt-1">
                            <textarea id="message" name="message" rows={4} required className="block w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md shadow-sm focus:ring-brand-cyan-500 focus:border-brand-cyan-500 sm:text-sm bg-white dark:bg-slate-800"></textarea>
                        </div>
                    </div>
                    <div>
                        <Button type="submit" className="w-full">Send Message</Button>
                    </div>
                 </form>
            </div>
            {/* FAQ */}
            <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {FAQ_ITEMS.map((item, index) => (
                         <details key={index} className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-800/50 group">
                            <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                                {item.question}
                                <span className="transform transition-transform duration-200 group-open:rotate-180">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                                </span>
                            </summary>
                            <p className="mt-4 text-slate-600 dark:text-slate-400">{item.answer}</p>
                        </details>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};

export default ContactPage;
