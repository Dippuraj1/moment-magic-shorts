
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Upload, Video, Share } from 'lucide-react';

const HowItWorks = () => {
  return (
    <Layout>
      <div className="container mx-auto max-w-6xl py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">How Magic Moments Works</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform transforms your wedding footage into beautiful highlight videos and shareable shorts in three simple steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-16 mb-16">
          {/* Step 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="text-5xl font-bold text-teal-500 mb-4">01</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Upload Your Wedding Footage</h2>
              <p className="text-gray-600 mb-6">
                Start by uploading your wedding videos in any common format (MP4, MOV, AVI, MKV). 
                Our platform accepts large files and even multiple videos from different cameras.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-teal-500">✓</div>
                  <span>Support for all common video formats</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-teal-500">✓</div>
                  <span>Upload up to 10 hours of footage</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-teal-500">✓</div>
                  <span>Secure and encrypted storage</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 bg-teal-100 p-8 rounded-xl">
              <div className="aspect-video rounded-lg flex items-center justify-center bg-teal-200">
                <Upload size={80} className="text-teal-500" />
              </div>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-teal-100 p-8 rounded-xl">
              <div className="aspect-video rounded-lg flex items-center justify-center bg-teal-200">
                <Video size={80} className="text-teal-500" />
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold text-teal-500 mb-4">02</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">AI Magic Transforms Your Videos</h2>
              <p className="text-gray-600 mb-6">
                Our powerful AI analyzes your videos, detecting key moments, emotions, and special events. 
                It then automatically edits everything into a beautiful highlight video and creates short clips for social media.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-teal-500">✓</div>
                  <span>Emotional moment detection</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-teal-500">✓</div>
                  <span>Professional-grade editing algorithms</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-teal-500">✓</div>
                  <span>Custom short clip generation</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="text-5xl font-bold text-teal-500 mb-4">03</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Download and Share Your Memories</h2>
              <p className="text-gray-600 mb-6">
                Preview your videos, then download or share them directly to social media. 
                Your wedding memories are now beautifully preserved and ready to be shared with friends and family.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-teal-500">✓</div>
                  <span>High-quality video downloads</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-teal-500">✓</div>
                  <span>Direct social media sharing</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-teal-500">✓</div>
                  <span>Create additional custom shorts</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 bg-teal-100 p-8 rounded-xl">
              <div className="aspect-video rounded-lg flex items-center justify-center bg-teal-200">
                <Share size={80} className="text-teal-500" />
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center py-8 border-t border-gray-200 mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Transform Your Wedding Videos?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Upload your wedding footage now and let our AI work its magic to create beautiful memories that last forever.
          </p>
          <Link to="/upload" className="btn-primary">
            Upload Your Video Now
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default HowItWorks;
