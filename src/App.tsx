/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, Globe, Code, Zap } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans">
      {/* Navigation */}
      <nav className="border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold tracking-tight text-indigo-600">MeriWebsite</span>
            </div>
            <div className="hidden sm:flex sm:space-x-8">
              <a href="#" className="text-neutral-600 hover:text-neutral-900 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#" className="text-neutral-600 hover:text-neutral-900 px-3 py-2 rounded-md text-sm font-medium">Features</a>
              <a href="#" className="text-neutral-600 hover:text-neutral-900 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-neutral-900 sm:text-5xl md:text-6xl">
            <span className="block">Welcome to your</span>
            <span className="block text-indigo-600">New Website</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-neutral-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            This is a clean, modern starting point for your web project. Let me know what specific features, pages, or designs you need.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition-colors">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Feature grid */}
        <div className="mt-24 pb-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-sm border border-neutral-100 h-full">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <Globe className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-neutral-900 tracking-tight">Custom Domain Ready</h3>
                  <p className="mt-5 text-base text-neutral-500">
                    Export your code and deploy to platforms like Vercel or Netlify to connect your own custom domain name (www.yourdomain.com).
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-sm border border-neutral-100 h-full">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <Code className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-neutral-900 tracking-tight">Modern Tech Stack</h3>
                  <p className="mt-5 text-base text-neutral-500">
                    Built with React and Tailwind CSS for rapid development, fully responsive design, and excellent performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-sm border border-neutral-100 h-full">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <Zap className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-neutral-900 tracking-tight">AI Generated</h3>
                  <p className="mt-5 text-base text-neutral-500">
                    Just tell me what kind of website you want (e-commerce, blog, portfolio) and I will build it for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
