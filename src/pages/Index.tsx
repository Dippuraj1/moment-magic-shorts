import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import FeatureCard from '@/components/FeatureCard';
import Testimonial from '@/components/Testimonial';
import { Video, Clock, Share, Upload, FileVideo, Image } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-20 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Turn Your Wedding Day Into <span className="text-teal-500">Unforgettable Moments</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Our AI-powered magic transforms hours of wedding footage into beautiful highlight reels and shareable shorts in minutes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/upload" className="btn-primary">
                Upload Your Wedding Video
              </Link>
              <Link to="/how-it-works" className="btn-secondary">
                See How It Works
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="bg-white p-3 rounded-xl shadow-xl">
                <img 
                  src="/lovable-uploads/photo-1649972904349-6e44c42644a7.jpg" 
                  alt="Wedding Couple Moment" 
                  className="w-full rounded-lg object-cover" 
                />
                <div className="absolute -bottom-4 -right-4 bg-teal-500 text-white py-2 px-4 rounded-lg shadow-md">
                  AI-Powered Wedding Videos
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How to Make a Wedding Video in 3 Simple Steps</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform makes it easy to transform your raw wedding footage into beautiful highlight videos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-highlight text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="h-8 w-8 text-teal-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Upload Your Raw Clips</h3>
              <p className="text-gray-600">
                Upload your wedding footage in various formats including MP4, MOV, AVI, and MKV.
              </p>
            </div>
            
            <div className="card-highlight text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="h-8 w-8 text-teal-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Magic Happens</h3>
              <p className="text-gray-600">
                Our AI analyzes your videos to identify key moments, emotions, and highlights automatically.
              </p>
            </div>
            
            <div className="card-highlight text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Share className="h-8 w-8 text-teal-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Export and Share</h3>
              <p className="text-gray-600">
                Download your highlight video and social media shorts to share with family and friends.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">AI-Powered Editing for Professional Results</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our advanced AI technology does the heavy lifting so you get amazing results with zero editing experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Clock size={32} />}
              title="Save Hours of Editing"
              description="What would take days with traditional editing software is done in minutes with our AI."
            />
            <FeatureCard 
              icon={<FileVideo size={32} />}
              title="Auto-Generated Shorts"
              description="Get social media ready 15-60 second clips perfect for sharing special moments."
            />
            <FeatureCard 
              icon={<Image size={32} />}
              title="Emotion Detection"
              description="Our AI identifies emotional peaks like laughter, tears of joy, and special moments."
            />
            <FeatureCard 
              icon={<Video size={32} />}
              title="Multi-Format Support"
              description="Upload videos in various formats including MP4, MOV, AVI, and MKV."
            />
            <FeatureCard 
              icon={<Share size={32} />}
              title="Easy Sharing"
              description="Share directly to social media or download in high quality for any purpose."
            />
            <FeatureCard 
              icon={<Upload size={32} />}
              title="Cloud Storage"
              description="Access your videos from anywhere with secure cloud storage for all your projects."
            />
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of happy couples who have preserved their wedding memories with Magic Moments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Testimonial 
              quote="Magic Moments saved us so much time! We had 8 hours of wedding footage that was transformed into a beautiful 10-minute highlight video."
              author="Sarah & Michael"
              role="Newlyweds"
            />
            <Testimonial 
              quote="As a wedding videographer, this tool has revolutionized my workflow. I can deliver highlights to clients in a fraction of the time."
              author="James Peterson"
              role="Professional Videographer"
            />
            <Testimonial 
              quote="The shorts feature is amazing! We got perfect clips for Instagram and TikTok that captured our special day beautifully."
              author="Emma & David"
              role="Newlyweds"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-teal-500 py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Make Your Wedding Moments Last Forever</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Transform your wedding footage into beautiful memories you'll cherish for a lifetime.
          </p>
          <Link to="/upload" className="bg-white text-teal-500 px-8 py-3 rounded-lg hover:bg-white/90 transition-colors shadow-lg inline-block">
            Get Started Now
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
