
import React, { useState } from 'react';
import { PRICING_PLANS } from '../constants';
import Button from '../components/Button';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Choose the Plan That's Right for You
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-slate-600 dark:text-slate-400">
          Simple, transparent pricing. Cancel anytime.
        </p>
      </div>

      <div className="mt-12 flex justify-center items-center gap-4">
        <span className={`font-medium ${billingCycle === 'monthly' ? 'text-brand-cyan-500' : 'text-slate-500'}`}>Monthly</span>
        <label htmlFor="billing-toggle" className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            id="billing-toggle"
            className="sr-only peer"
            checked={billingCycle === 'yearly'}
            onChange={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
          />
          <div className="w-11 h-6 bg-slate-200 dark:bg-slate-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-cyan-500"></div>
        </label>
        <span className={`font-medium ${billingCycle === 'yearly' ? 'text-brand-cyan-500' : 'text-slate-500'}`}>
          Yearly <span className="text-sm text-green-500">(Save 20%)</span>
        </span>
      </div>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {PRICING_PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`p-8 border rounded-2xl flex flex-col ${
              plan.isPopular
                ? 'border-brand-cyan-500 shadow-2xl relative bg-slate-50 dark:bg-slate-900'
                : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50'
            }`}
          >
            {plan.isPopular && (
              <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                <span className="bg-brand-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">Most Popular</span>
              </div>
            )}
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{plan.name}</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">{plan.description}</p>
            <div className="mt-6">
              <span className="text-5xl font-extrabold text-slate-900 dark:text-white">
                {billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
              </span>
              <span className="text-lg font-medium text-slate-500 dark:text-slate-400">/month</span>
            </div>
            <ul className="mt-8 space-y-4 text-slate-600 dark:text-slate-400 flex-grow">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button variant={plan.isPopular ? 'primary' : 'secondary'} className="w-full">
                Choose Plan
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
