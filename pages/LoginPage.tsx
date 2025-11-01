
import React from 'react';
import type { Page } from '../types';
import Button from '../components/Button';

interface LoginPageProps {
  navigate: (page: Page) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ navigate }) => {
  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-slate-50 dark:bg-slate-950/20 px-4">
      <div className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl">
        <div>
          <h2 className="text-3xl font-extrabold text-center text-slate-900 dark:text-white">
            Welcome Back
          </h2>
          <p className="mt-2 text-center text-sm text-slate-600 dark:text-slate-400">
            Or <a href="#" onClick={(e) => e.preventDefault()} className="font-medium text-brand-cyan-500 hover:text-brand-cyan-600">create a new account</a>
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-3 border border-slate-300 dark:border-slate-700 placeholder-slate-500 text-slate-900 dark:text-white bg-white dark:bg-slate-800 rounded-t-md focus:outline-none focus:ring-brand-cyan-500 focus:border-brand-cyan-500 focus:z-10 sm:text-sm" placeholder="Email address" />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-3 border border-slate-300 dark:border-slate-700 placeholder-slate-500 text-slate-900 dark:text-white bg-white dark:bg-slate-800 rounded-b-md focus:outline-none focus:ring-brand-cyan-500 focus:border-brand-cyan-500 focus:z-10 sm:text-sm" placeholder="Password" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-brand-cyan-600 focus:ring-brand-cyan-500 border-slate-300 dark:border-slate-600 rounded bg-slate-100 dark:bg-slate-700" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-900 dark:text-slate-300">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-brand-cyan-500 hover:text-brand-cyan-600">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <Button type="submit" className="w-full" onClick={(e) => { e.preventDefault(); navigate('dashboard'); }}>
              Sign In
            </Button>
          </div>
        </form>
         <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-300 dark:border-slate-700" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400">
              Or continue with
            </span>
          </div>
        </div>

        <div>
            <Button variant="secondary" className="w-full">
                {/* Google Icon */}
                <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.641-3.657-11.088-8.508l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C41.38,36.148,44,30.638,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg>
                Sign in with Google
            </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
