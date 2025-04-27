
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import VideoPlayer from '@/components/VideoPlayer';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { toast } from 'sonner';

const Highlights = () => {
  // Simulate data from server
  const [activeTab, setActiveTab] = useState('highlights');
  
  // Mock data for demo purposes
  const highlights = {
    url: 'https://cdn.coverr.co/videos/coverr-a-man-and-a-woman-getting-married-5851/1080p.mp4',
    title: 'Wedding Highlights Reel',
    duration: '3:42'
  };
  
  const shorts = [
    {
      id: 's1',
      url: 'https://cdn.coverr.co/videos/coverr-couple-getting-married-4918/1080p.mp4',
      title: 'First Kiss',
      duration: '0:15'
    },
    {
      id: 's2',
      url: 'https://cdn.coverr.co/videos/coverr-excited-bride-3645/1080p.mp4',
      title: 'Bridal Preparations',
      duration: '0:30'
    },
    {
      id: 's3',
      url: 'https://cdn.coverr.co/videos/coverr-wedding-reception-1754/1080p.mp4',
      title: 'First Dance',
      duration: '0:20'
    }
  ];
  
  const handleGenerateMore = () => {
    toast.info('Generating additional shorts...', {
      duration: 2000,
    });
    
    setTimeout(() => {
      toast.success('New shorts generated!', {
        description: 'Check the Shorts tab to see your new clips.',
      });
    }, 2500);
  };
  
  const handleDownloadAll = () => {
    toast.info('Preparing download...', {
      duration: 1500,
    });
    
    setTimeout(() => {
      toast.success('Download started!', {
        description: 'Your videos are being downloaded.',
      });
    }, 2000);
  };

  return (
    <Layout>
      <div className="container mx-auto max-w-6xl py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Wedding Highlights</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are your AI-generated wedding video highlights and shorts.
          </p>
        </div>
        
        <Tabs defaultValue="highlights" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="highlights">Highlights</TabsTrigger>
            <TabsTrigger value="shorts">Shorts</TabsTrigger>
            <TabsTrigger value="original">Original Video</TabsTrigger>
          </TabsList>
          
          <TabsContent value="highlights" className="space-y-6">
            <VideoPlayer 
              videoUrl={highlights.url}
              title={highlights.title}
              duration={highlights.duration}
            />
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <button 
                onClick={handleGenerateMore}
                className="btn-primary"
              >
                Generate More Shorts
              </button>
              
              <button 
                onClick={handleDownloadAll}
                className="btn-secondary"
              >
                Download All Videos
              </button>
            </div>
          </TabsContent>
          
          <TabsContent value="shorts">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {shorts.map((short) => (
                <VideoPlayer 
                  key={short.id}
                  videoUrl={short.url}
                  title={short.title}
                  duration={short.duration}
                />
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              <button 
                onClick={handleGenerateMore}
                className="btn-primary"
              >
                Generate More Shorts
              </button>
            </div>
          </TabsContent>
          
          <TabsContent value="original">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Original Footage</h2>
              <div className="mb-6">
                <VideoPlayer 
                  videoUrl="https://cdn.coverr.co/videos/coverr-a-wedding-ceremony-5850/1080p.mp4"
                  title="Original Wedding Video"
                  duration="2:16:42"
                />
              </div>
              <p className="text-gray-600">
                This is your original uploaded footage. Our AI has processed this video to create your highlights and shorts.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Highlights;
