
import React from 'react';
import type { Page } from '../types';
import Button from '../components/Button';
import { FEATURES, AIIcon, CloudIcon, CollabIcon, PresetsIcon, TemplatesIcon, TimelineIcon } from '../constants';

interface HomePageProps {
  navigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://picsum.photos/seed/hero/1920/1080" alt="Cinematic background" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            Make cinematic videos — fast.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-300">
            Online editor, professional templates, and one-click social exports. Start your free trial — no credit card.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="primary" onClick={() => navigate('pricing')}>
              Start Free Trial
            </Button>
            <Button size="lg" variant="secondary" onClick={() => navigate('templates')}>
              Explore Templates
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Everything You Need to Create</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
              From raw footage to final cut, our powerful tools help you tell your story.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {FEATURES.slice(0, 6).map((feature) => (
              <div key={feature.title} className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                {feature.icon}
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button variant="ghost" onClick={() => navigate('features')}>
              See All Features &rarr;
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-slate-100 dark:bg-slate-950/50 py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img src="https://i.pravatar.cc/100?u=a042581f4e29026704d" alt="Customer avatar" className="w-24 h-24 rounded-full mx-auto" />
          <blockquote className="mt-8 max-w-3xl mx-auto">
            <p className="text-xl sm:text-2xl font-medium text-slate-900 dark:text-white">
              “ProVideo has transformed how we create content. The editor is intuitive, the templates are stunning, and we can publish videos in a fraction of the time. It's a game-changer.”
            </p>
          </blockquote>
          <cite className="mt-6 block font-semibold text-slate-900 dark:text-white not-italic">
            Jane Doe, Head of Marketing
          </cite>
        </div>
      </section>
      
      {/* Final CTA */}
       <section className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Ready to create your masterpiece?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
             Join thousands of creators and businesses telling their stories with ProVideo.
          </p>
          <div className="mt-8">
            <Button size="lg" variant="primary" onClick={() => navigate('pricing')}>
              Start Your Free Trial Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
