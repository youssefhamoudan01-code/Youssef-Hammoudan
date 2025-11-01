
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Empowering Creators to Tell Their Stories
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-slate-600 dark:text-slate-400">
          We believe that professional video creation should be accessible to everyone. Our mission is to build powerful, intuitive tools that help bring your creative vision to life.
        </p>
      </div>

      <div className="mt-20">
        <img src="https://picsum.photos/seed/team/1200/600" alt="Our team" className="rounded-2xl shadow-xl w-full object-cover" />
      </div>

      <section className="py-20 sm:py-24">
        <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Trusted by the best teams</h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">We're proud to work with leading brands and creators worldwide.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
            {['Google', 'Netflix', 'Shopify', 'Airbnb', 'Spotify'].map(name => (
                 <div key={name} className="flex justify-center">
                    <p className="text-2xl font-semibold text-slate-400 dark:text-slate-500">{name}</p>
                 </div>
            ))}
        </div>
      </section>

       <section className="py-20 sm:py-24 bg-slate-100 dark:bg-slate-950/50 rounded-2xl">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Our Values</h2>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Creator-Centric</h3>
                    <p className="mt-2 text-slate-600 dark:text-slate-400">Our users are at the heart of everything we do. We listen, learn, and build for their success.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Innovation</h3>
                    <p className="mt-2 text-slate-600 dark:text-slate-400">We constantly push the boundaries of what's possible in online video editing.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Simplicity</h3>
                    <p className="mt-2 text-slate-600 dark:text-slate-400">We believe powerful tools don't have to be complicated. We prioritize intuitive design.</p>
                </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default AboutPage;
