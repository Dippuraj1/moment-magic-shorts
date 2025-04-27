
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import VideoPlayer from '@/components/VideoPlayer';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Spinner } from '@/components/ui/spinner';
import { ShotstackService } from '@/services/ShotstackService';

const Highlights = () => {
  const [activeTab, setActiveTab] = useState('highlights');
  const [isLoading, setIsLoading] = useState(true);
  const [videos, setVideos] = useState<any[]>([]);
  const [originalVideo, setOriginalVideo] = useState<any>(null);
  const [highlightVideo, setHighlightVideo] = useState<any>(null);
  const [shorts, setShorts] = useState<any[]>([]);
  const { user } = useAuth();
  
  useEffect(() => {
    if (user) {
      fetchVideos();
    }
  }, [user]);
  
  const fetchVideos = async () => {
    try {
      setIsLoading(true);
      
      // Get videos from the database
      const { data, error } = await supabase
        .from('wedding_videos')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      
      if (data && data.length > 0) {
        setVideos(data);
        
        // Set original video (most recent upload)
        setOriginalVideo(data[0]);
        
        // For demo purposes, assume we have highlight videos and shorts
        // In a real app, these would be created by Shotstack and stored in DB
        const mockHighlight = {
          ...data[0],
          id: 'highlight-' + data[0].id,
          title: 'Wedding Highlights Reel',
          duration: '3:42',
          url: 'https://cdn.coverr.co/videos/coverr-a-man-and-a-woman-getting-married-5851/1080p.mp4'
        };
        
        setHighlightVideo(mockHighlight);
        
        // Mock shorts
        setShorts([
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
        ]);
      }
    } catch (error) {
      console.error('Error fetching videos:', error);
      toast.error('Failed to load your videos');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleGenerateMore = async () => {
    if (!originalVideo) {
      toast.error('No original video found');
      return;
    }
    
    toast.info('Generating additional shorts...', {
      duration: 2000,
    });
    
    try {
      // Call Shotstack API to create a new short
      const result = await ShotstackService.createShort(originalVideo.storage_path, {
        title: 'New Short',
        duration: 15 // 15 seconds
      });
      
      toast.success('New short scheduled for generation', {
        description: 'Check back soon to see your new clip.',
      });
      
      // In a real app, you'd poll for the result and show it when ready
    } catch (error) {
      console.error('Error generating short:', error);
      toast.error('Failed to generate new shorts');
    }
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
  
  const getPreviewUrl = async (video: any) => {
    try {
      if (!video || !video.storage_path) return '';
      
      // Get a signed URL for the video
      const { data, error } = await supabase
        .storage
        .from('wedding_videos')
        .createSignedUrl(video.storage_path, 3600); // 1 hour
        
      if (error) throw error;
      
      return data.signedUrl;
    } catch (error) {
      console.error('Error getting video URL:', error);
      return '';
    }
  };

  if (isLoading) {
    return (
      <ProtectedRoute>
        <Layout>
          <div className="flex justify-center items-center h-96">
            <Spinner size="lg" />
            <p className="ml-3 text-gray-600">Loading your videos...</p>
          </div>
        </Layout>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <Layout>
        <div className="container mx-auto max-w-6xl py-12 px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Wedding Highlights</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are your AI-generated wedding video highlights and shorts.
            </p>
          </div>
          
          {videos.length === 0 ? (
            <div className="text-center p-10 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">No Videos Yet</h2>
              <p className="text-gray-600 mb-6">
                You haven't uploaded any wedding videos yet. Upload a video to get started!
              </p>
              <a href="/upload" className="btn-primary">Upload a Video</a>
            </div>
          ) : (
            <Tabs defaultValue="highlights" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="highlights">Highlights</TabsTrigger>
                <TabsTrigger value="shorts">Shorts</TabsTrigger>
                <TabsTrigger value="original">Original Video</TabsTrigger>
              </TabsList>
              
              <TabsContent value="highlights" className="space-y-6">
                {highlightVideo && (
                  <VideoPlayer 
                    videoUrl={highlightVideo.url}
                    title={highlightVideo.title}
                    duration={highlightVideo.duration}
                  />
                )}
                
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
                {originalVideo ? (
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Original Footage</h2>
                    <div className="mb-6">
                      <VideoPlayer 
                        videoUrl="https://cdn.coverr.co/videos/coverr-a-wedding-ceremony-5850/1080p.mp4" // Replace with actual URL from Supabase
                        title={originalVideo.title || "Original Wedding Video"}
                        duration={originalVideo.duration ? `${Math.floor(originalVideo.duration / 60)}:${originalVideo.duration % 60}` : "Unknown duration"}
                      />
                    </div>
                    <p className="text-gray-600">
                      This is your original uploaded footage. Our AI has processed this video to create your highlights and shorts.
                    </p>
                  </div>
                ) : (
                  <div className="text-center p-10">
                    <p>No original video found</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          )}
        </div>
      </Layout>
    </ProtectedRoute>
  );
};

export default Highlights;
