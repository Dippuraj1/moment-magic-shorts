
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <Layout>
      <div className="container mx-auto max-w-6xl py-12 px-4">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Simple, Transparent Pricing</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for you and start transforming your wedding videos today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Basic</h2>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold text-gray-800">$29</span>
                <span className="text-gray-500 ml-2">per video</span>
              </div>
              <p className="text-gray-600 mb-6">
                Perfect for a single wedding video transformation.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check size={20} className="mr-2 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>1 highlight video (up to 5 minutes)</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="mr-2 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>3 social media shorts</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="mr-2 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>HD quality export</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="mr-2 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>7-day cloud storage</span>
                </li>
              </ul>
            </div>
            
            <div className="px-6 pb-6">
              <Link 
                to="/upload" 
                className="block w-full py-3 px-6 text-center text-teal-500 border border-teal-500 rounded-lg hover:bg-teal-50 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
          
          {/* Pro Plan */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-teal-500 relative transition-transform hover:scale-105">
            <div className="bg-teal-500 text-white py-2 px-4 text-center text-sm font-medium">
              MOST POPULAR
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Premium</h2>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold text-gray-800">$59</span>
                <span className="text-gray-500 ml-2">per video</span>
              </div>
              <p className="text-gray-600 mb-6">
                Enhanced features for a perfect wedding highlight package.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check size={20} className="mr-2 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>1 highlight video (up to 15 minutes)</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="mr-2 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>10 social media shorts</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="mr-2 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>4K quality export</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="mr-2 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>30-day cloud storage</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="mr-2 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>Background music library</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="mr-2 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>Custom title overlays</span>
                </li>
              </ul>
            </div>
            
            <div className="px-6 pb-6">
              <Link 
                to="/upload" 
                className="block w-full py-3 px-6 text-center bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
          
          {/* Enterprise Plan */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Professional</h2>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold text-gray-800">$199</span>
                <span className="text-gray-500 ml-2">per year</span>
              </div>
              <p className="text-gray-600 mb-6">
                For professional videographers and multiple events.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check size={20} className="mr-2 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>Process up to 12 videos per year</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="mr-2 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>Unlimited highlight length</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="mr-2 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>Unlimited social media shorts</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="mr-2 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>4K quality export</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="mr-2 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>1-year cloud storage</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="mr-2 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>Priority processing</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="mr-2 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>White-label downloads</span>
                </li>
              </ul>
            </div>
            
            <div className="px-6 pb-6">
              <Link 
                to="/upload" 
                className="block w-full py-3 px-6 text-center text-teal-500 border border-teal-500 rounded-lg hover:bg-teal-50 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
        
        {/* FAQs */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">How long does processing take?</h3>
              <p className="text-gray-600">
                Processing time depends on the length of your original video, but most wedding videos are processed within 30-60 minutes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">What video formats do you support?</h3>
              <p className="text-gray-600">
                We support all common video formats including MP4, MOV, AVI, and MKV.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">Can I request specific moments in the highlight?</h3>
              <p className="text-gray-600">
                Premium and Professional plans allow you to flag specific moments you want included in your highlight video.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">How secure are my videos?</h3>
              <p className="text-gray-600">
                All uploads are encrypted and stored securely. We never share your videos with third parties or use them for promotional purposes without consent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;
