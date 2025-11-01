
import React from 'react';
import type { Page } from '../types';

const EditorPage: React.FC = () => {
    // This is a static mock UI
  return (
    <div className="h-screen w-screen bg-slate-800 text-white flex flex-col font-sans">
      {/* Header */}
      <header className="flex-shrink-0 bg-slate-900 h-14 flex items-center justify-between px-4 border-b border-slate-700">
        <div className="flex items-center gap-4">
            <a href="/" className="text-xl font-bold">ProVideo</a>
            <div className="w-px h-6 bg-slate-700"></div>
            <span className="text-sm text-slate-400">Project / Summer Campaign Ad</span>
        </div>
        <div className="flex items-center gap-3">
            <button className="px-3 py-1.5 text-sm bg-slate-700 hover:bg-slate-600 rounded-md">Share</button>
            <button className="px-4 py-1.5 text-sm bg-brand-cyan-500 hover:bg-brand-cyan-600 text-white font-semibold rounded-md">Export</button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-grow flex overflow-hidden">
        {/* Left Panel (Assets) */}
        <aside className="w-72 bg-slate-900/70 p-4 flex flex-col border-r border-slate-700">
          <div className="flex gap-2 mb-4">
            <button className="flex-1 py-2 text-sm bg-slate-700 rounded-md">My Media</button>
            <button className="flex-1 py-2 text-sm bg-slate-800 hover:bg-slate-700 rounded-md">Stock</button>
          </div>
          <div className="grid grid-cols-2 gap-2 overflow-y-auto">
            {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="aspect-video bg-slate-700 rounded-md overflow-hidden cursor-pointer">
                    <img src={`https://picsum.photos/seed/asset${i}/200/112`} className="object-cover w-full h-full"/>
                </div>
            ))}
          </div>
        </aside>

        {/* Center Panel (Preview) */}
        <main className="flex-1 flex flex-col p-4 gap-4">
          <div className="flex-grow bg-black flex items-center justify-center rounded-md relative">
            <img src="https://picsum.photos/seed/preview/1280/720" className="max-w-full max-h-full object-contain" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4 bg-black/30 p-2 rounded-md backdrop-blur-sm">
                <button className="text-white"> {/* Play */} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.717-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" /></svg></button>
                <span className="text-xs">00:05 / 00:30</span>
                <div className="flex-grow h-1.5 bg-slate-600 rounded-full"><div className="w-1/6 h-full bg-brand-cyan-500 rounded-full"></div></div>
                <button>{/* Volume */}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.66 1.905H6.44l4.5 4.5c.944.945 2.56.276 2.56-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" /><path d="M15.932 7.757a.75.75 0 011.06 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" /></svg></button>
            </div>
          </div>
          <div className="flex-shrink-0 h-10 flex items-center gap-4">
              <button className="flex items-center gap-2 text-sm p-2 bg-slate-700 hover:bg-slate-600 rounded-md"><span>Undo</span></button>
              <button className="flex items-center gap-2 text-sm p-2 bg-slate-700 hover:bg-slate-600 rounded-md"><span>Redo</span></button>
              <div className="w-px h-6 bg-slate-700"></div>
              <button className="flex items-center gap-2 text-sm p-2 bg-slate-700 hover:bg-slate-600 rounded-md"><span>Split</span></button>
              <button className="flex items-center gap-2 text-sm p-2 bg-slate-700 hover:bg-slate-600 rounded-md"><span>Delete</span></button>
          </div>
        </main>
        
        {/* Right Panel (Inspector) */}
        <aside className="w-72 bg-slate-900/70 p-4 border-l border-slate-700 overflow-y-auto">
           <h3 className="text-lg font-semibold mb-4">Properties</h3>
           <div className="space-y-4 text-sm">
             <div>
               <label className="block text-slate-400">Scale</label>
               <input type="range" className="w-full" />
             </div>
             <div>
               <label className="block text-slate-400">Opacity</label>
               <input type="range" className="w-full" />
             </div>
             <div>
               <label className="block text-slate-400">Color</label>
               <div className="flex gap-2">
                 <button className="w-full p-2 bg-slate-700 rounded-md">Adjust</button>
                 <button className="w-full p-2 bg-slate-700 rounded-md">Filters</button>
               </div>
             </div>
           </div>
        </aside>
      </div>

      {/* Timeline */}
      <footer className="flex-shrink-0 h-48 bg-slate-900 border-t border-slate-700 p-2 flex flex-col">
        <div className="h-full bg-slate-800 rounded-md p-2 space-y-1 overflow-hidden">
            {/* Track 1 */}
            <div className="h-12 bg-slate-700/50 rounded flex items-center relative">
                <div className="absolute left-[10%] w-[40%] h-full bg-blue-500/50 rounded-md border-2 border-blue-400"></div>
                <div className="absolute left-[55%] w-[20%] h-full bg-purple-500/50 rounded-md border-2 border-purple-400"></div>
            </div>
            {/* Track 2 */}
            <div className="h-12 bg-slate-700/50 rounded flex items-center relative">
                <div className="absolute left-[25%] w-[30%] h-full bg-green-500/50 rounded-md border-2 border-green-400"></div>
            </div>
             {/* Audio Track */}
            <div className="h-12 bg-slate-700/50 rounded flex items-center relative">
                <div className="absolute left-0 w-[90%] h-full bg-orange-500/50 rounded-md border-2 border-orange-400"></div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default EditorPage;
