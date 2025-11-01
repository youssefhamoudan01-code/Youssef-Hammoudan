
import React from 'react';
import type { NavLink, Feature, PricingPlan, Template, PortfolioItem, FaqItem, Project } from './types';

// Icons
export const TimelineIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mb-4 text-brand-cyan-400"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" /></svg>;
export const TemplatesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mb-4 text-brand-cyan-400"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-1.621-1.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h9.75a2.25 2.25 0 012.25 2.25zm0 0h-3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125h3.375z" /></svg>;
export const CollabIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mb-4 text-brand-cyan-400"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.928A9.095 9.095 0 0112 3c2.64 0 4.98.923 6.75 2.47m-2.75 3.553c.42-.32.8-.724 1.14-1.187m-11.418 0c.34.463.72.867 1.14 1.187m0 0a9.095 9.095 0 0110.276 0M6.228 12.381a9.095 9.095 0 010-3.762M17.772 12.381a9.095 9.095 0 000-3.762" /></svg>;
export const CloudIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mb-4 text-brand-cyan-400"><path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" /></svg>;
export const PresetsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mb-4 text-brand-cyan-400"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v17.792c0 .497.624.696 1.012.308l5.83-5.83a.75.75 0 000-1.06l-5.83-5.83a.75.75 0 00-1.012.308z" /></svg>;
export const AIIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mb-4 text-brand-cyan-400"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.543L16.5 21.75l-.398-1.207a3.375 3.375 0 00-2.455-2.456l-1.207-.398 1.207-.398a3.375 3.375 0 002.455-2.456l.398-1.207.398 1.207a3.375 3.375 0 002.456 2.456l1.207.398-1.207.398a3.375 3.375 0 00-2.456 2.456z" /></svg>;


export const NAV_LINKS: NavLink[] = [
  { name: 'Features', page: 'features' },
  { name: 'Templates', page: 'templates' },
  { name: 'Pricing', page: 'pricing' },
  { name: 'Portfolio', page: 'portfolio' },
];

export const FEATURES: Feature[] = [
  { icon: <TimelineIcon />, title: 'Intuitive Timeline Editor', description: 'Multi-track timeline, drag & drop assets, and precision controls. Familiar interface, powerful results.' },
  { icon: <TemplatesIcon />, title: 'Cinematic Templates', description: 'Jumpstart your project with professionally designed templates for ads, intros, social media, and more.' },
  { icon: <CollabIcon />, title: 'Real-time Collaboration', description: 'Work with your team on the same project, at the same time. Share feedback with time-stamped comments.' },
  { icon: <CloudIcon />, title: 'Cloud Storage & Export', description: 'Secure cloud storage for all your projects and assets. Export directly to social platforms or download.' },
  { icon: <PresetsIcon />, title: 'Social Media Presets', description: 'One-click export presets for YouTube, Instagram Reels, TikTok, and more, in 16:9, 9:16, and 1:1 formats.' },
  { icon: <AIIcon />, title: 'AI-Powered Tools', description: 'Automate tedious tasks with AI. Generate subtitles, perform smart cuts, and enhance audio with a single click.' },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Free',
    price: { monthly: '$0', yearly: '$0' },
    description: 'For creators getting started with video.',
    features: ['Up to 3 projects', '720p exports', 'Limited template access', 'Watermark on videos'],
  },
  {
    name: 'Pro',
    price: { monthly: '$19', yearly: '$15' },
    description: 'For professionals creating regular content.',
    features: ['Unlimited projects', '4K exports', 'Full template library', 'No watermark', '20GB cloud storage', 'Priority support'],
    isPopular: true,
  },
  {
    name: 'Business',
    price: { monthly: '$49', yearly: '$39' },
    description: 'For teams and agencies that need to collaborate.',
    features: ['All Pro features', 'Team collaboration tools', 'Shared brand kits', '100GB cloud storage', 'Dedicated account manager'],
  },
];

export const TEMPLATES: Template[] = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Cinematic Title ${i + 1}`,
    category: ['Promo', 'Social', 'Ads', 'Intros'][i % 4],
    imageUrl: `https://picsum.photos/seed/template${i}/500/281`,
}));

export const PORTFOLIO_ITEMS: PortfolioItem[] = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    title: `Client Project ${i + 1}`,
    category: ['Case Studies', 'Brand Videos', 'Social Ads'][i % 3],
    videoUrl: `https://picsum.photos/seed/portfolio${i}/500/281`,
}));


export const FAQ_ITEMS: FaqItem[] = [
    { question: 'Can I cancel my subscription at any time?', answer: 'Yes, you can cancel your subscription at any time from your account dashboard. You will retain access to your plan\'s features until the end of the current billing cycle.' },
    { question: 'What happens to my projects if I downgrade to a free plan?', answer: 'Your projects will be securely stored. However, if you have more projects or storage usage than the free plan allows, you will need to upgrade again to create new projects or upload new media.' },
    { question: 'Do you offer a discount for yearly billing?', answer: 'Absolutely! You can save significantly by choosing our yearly billing option. The discount is reflected in the pricing table when you toggle to "Yearly".' },
    { question: 'What video formats can I export?', answer: 'You can export videos in high-quality MP4 format, optimized for web and social media platforms. We support resolutions up to 4K on our Pro and Business plans.' },
];

export const PROJECTS: Project[] = [
  { id: 1, name: 'Summer Campaign Ad', lastUpdated: '2 hours ago', thumbnailUrl: 'https://picsum.photos/seed/proj1/300/170' },
  { id: 2, name: 'Product Launch Reel', lastUpdated: '1 day ago', thumbnailUrl: 'https://picsum.photos/seed/proj2/300/170' },
  { id: 3, name: 'Client Testimonial', lastUpdated: '3 days ago', thumbnailUrl: 'https://picsum.photos/seed/proj3/300/170' },
  { id: 4, name: 'Weekly Vlog Ep. 12', lastUpdated: '5 days ago', thumbnailUrl: 'https://picsum.photos/seed/proj4/300/170' },
];
