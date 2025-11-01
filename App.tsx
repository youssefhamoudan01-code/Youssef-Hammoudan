
import React, { useState, useEffect } from 'react';
import type { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import TemplatesPage from './pages/TemplatesPage';
import PricingPage from './pages/PricingPage';
import PortfolioPage from './pages/PortfolioPage';
import EditorPage from './pages/EditorPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import AboutPage from './pages/AboutPage';
import LearnPage from './pages/LearnPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // On mount, check for saved theme or system preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage navigate={setCurrentPage} />;
      case 'features':
        return <FeaturesPage />;
      case 'templates':
        return <TemplatesPage />;
      case 'pricing':
        return <PricingPage />;
      case 'portfolio':
        return <PortfolioPage />;
      case 'editor':
        return <EditorPage />;
      case 'login':
        return <LoginPage navigate={setCurrentPage} />;
      case 'dashboard':
        return <DashboardPage navigate={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'learn':
        return <LearnPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage navigate={setCurrentPage} />;
    }
  };

  if (currentPage === 'editor') {
    return <EditorPage />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <Header currentPage={currentPage} navigate={setCurrentPage} theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer navigate={setCurrentPage} />
    </div>
  );
};

export default App;
