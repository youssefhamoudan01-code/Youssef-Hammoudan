
import React from 'react';
import type { Page } from '../types';
import Button from '../components/Button';
import { PROJECTS } from '../constants';

interface DashboardPageProps {
  navigate: (page: Page) => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ navigate }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
        <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Dashboard</h1>
            <p className="mt-1 text-slate-600 dark:text-slate-400">Welcome back, User!</p>
        </div>
        <Button variant="primary" className="mt-4 md:mt-0" onClick={() => navigate('editor')}>
          + Create New Project
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content: Projects */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map(project => (
              <div key={project.id} className="bg-white dark:bg-slate-800/50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer" onClick={() => navigate('editor')}>
                <img src={project.thumbnailUrl} alt={project.name} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-white">{project.name}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Last updated: {project.lastUpdated}</p>
                </div>
              </div>
            ))}
             <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer min-h-[220px]" onClick={() => navigate('editor')}>
                <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto mb-2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                    <span>Create your first project</span>
                </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">Storage Usage</h2>
            <div className="p-6 bg-white dark:bg-slate-800/50 rounded-lg shadow-md">
                <div className="flex justify-between items-baseline mb-2">
                    <span className="font-bold text-slate-900 dark:text-white">12.5 GB / 20 GB</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">62.5% used</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                    <div className="bg-brand-cyan-500 h-2.5 rounded-full" style={{width: '62.5%'}}></div>
                </div>
                <Button variant="secondary" className="w-full mt-6">Upgrade Plan</Button>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">Account</h2>
            <div className="p-6 bg-white dark:bg-slate-800/50 rounded-lg shadow-md divide-y divide-slate-200 dark:divide-slate-700">
                <a href="#" className="block py-3 text-slate-700 dark:text-slate-300 hover:text-brand-cyan-500 dark:hover:text-brand-cyan-400">Profile Settings</a>
                <a href="#" className="block py-3 text-slate-700 dark:text-slate-300 hover:text-brand-cyan-500 dark:hover:text-brand-cyan-400">Billing Information</a>
                <a href="#" className="block py-3 text-red-500 hover:text-red-600">Log Out</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
