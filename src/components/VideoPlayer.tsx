
import React, { useState } from 'react';
import { Play, Download, Share } from 'lucide-react';
import { toast } from 'sonner';

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
  duration?: string;
}

const VideoPlayer = ({ videoUrl, title, duration }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const handleDownload = () => {
    toast.info('Starting download...');
    // In a real app, this would handle the actual download
    setTimeout(() => {
      toast.success('Download completed!');
    }, 2000);
  };
  
  const handleShare = () => {
    // In a real app, this would open a share modal or use the Web Share API
    toast.success('Share link copied to clipboard!');
  };
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative aspect-video bg-black">
        {videoUrl ? (
          <video 
            src={videoUrl} 
            className="w-full h-full object-cover"
            controls={isPlaying}
            onClick={() => setIsPlaying(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center">
              <p>Video preview will appear here</p>
            </div>
          </div>
        )}
        
        {!isPlaying && videoUrl && (
          <div 
            className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Play size={32} className="text-white ml-1" />
            </div>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-800">{title || 'Untitled Video'}</h3>
            {duration && (
              <p className="text-sm text-gray-500">{duration}</p>
            )}
          </div>
          
          <div className="flex space-x-2">
            <button 
              onClick={handleDownload}
              className="p-2 rounded-full bg-teal-50 text-teal-600 hover:bg-teal-100 transition-colors"
              title="Download"
            >
              <Download size={20} />
            </button>
            <button 
              onClick={handleShare}
              className="p-2 rounded-full bg-teal-50 text-teal-600 hover:bg-teal-100 transition-colors"
              title="Share"
            >
              <Share size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
