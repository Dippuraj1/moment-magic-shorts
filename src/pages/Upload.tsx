
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import FileUploader from '@/components/FileUploader';
import ProcessingStatus from '@/components/ProcessingStatus';
import VideoPlayer from '@/components/VideoPlayer';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

const Upload = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [processingStage, setProcessingStage] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const [uploadedFilePath, setUploadedFilePath] = useState('');
  const [videoData, setVideoData] = useState<{
    title: string;
    filename: string;
    fileSize: number;
    storagePath: string;
  } | null>(null);
  
  const handleFileSelect = (selectedFile: File) => {
    setFile(selectedFile);
    
    // Create a temporary preview URL
    const url = URL.createObjectURL(selectedFile);
    setPreviewUrl(url);
  };
  
  const handleUploadComplete = (filePath: string, fileData: {
    title: string;
    filename: string;
    fileSize: number;
    storagePath: string;
  }) => {
    setUploadedFilePath(filePath);
    setVideoData(fileData);
  };
  
  const handleProcessing = async () => {
    if (!uploadedFilePath || !videoData) {
      toast.error('Please upload a file first');
      return;
    }
    
    setIsProcessing(true);
    setProcessingStage('Preparing video for processing');
    setProgress(0);
    
    try {
      // Call Shotstack API via Edge Function (which we'll implement later)
      // For now, simulate the processing
      simulateProcessing();
    } catch (error) {
      console.error('Processing error:', error);
      toast.error('Failed to process video');
      setIsProcessing(false);
    }
  };
  
  const simulateProcessing = () => {
    setProgress(0);
    
    // Simulate processing stages
    const stages = [
      'Analyzing video content',
      'Detecting emotional moments',
      'Creating highlight sequences',
      'Generating shorts',
      'Finalizing your videos'
    ];
    
    let stageIndex = 0;
    setProcessingStage(stages[stageIndex]);
    
    const processingInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 1;
        
        // Change processing stage
        if (newProgress % 20 === 0 && stageIndex < stages.length - 1) {
          stageIndex++;
          setProcessingStage(stages[stageIndex]);
        }
        
        // Complete processing
        if (newProgress >= 100) {
          clearInterval(processingInterval);
          setTimeout(() => {
            setIsProcessing(false);
            navigate('/highlights');
          }, 1500);
          return 100;
        }
        
        return newProgress;
      });
    }, 120);
  };
  
  return (
    <ProtectedRoute>
      <Layout>
        <div className="container mx-auto max-w-5xl py-12 px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Upload Your Wedding Video</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Upload your raw wedding footage and our AI will transform it into beautiful highlight videos and shareable shorts.
            </p>
          </div>
          
          {isProcessing ? (
            <div className="max-w-md mx-auto">
              <ProcessingStatus 
                isProcessing={isProcessing}
                progress={progress}
                statusText={processingStage}
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <FileUploader 
                  onFileSelect={handleFileSelect} 
                  onUploadComplete={handleUploadComplete}
                />
                
                {uploadedFilePath && (
                  <div className="mt-6 text-center">
                    <button 
                      onClick={handleProcessing}
                      className="btn-primary"
                    >
                      Start Processing
                    </button>
                  </div>
                )}
              </div>
              
              <div>
                <VideoPlayer 
                  videoUrl={previewUrl}
                  title={file?.name || 'Preview'}
                  duration={file ? 'Original footage' : undefined}
                />
              </div>
            </div>
          )}
          
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Supported Formats</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {['MP4', 'MOV', 'AVI', 'MKV'].map((format) => (
                <div key={format} className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-teal-500">{format}</div>
                  <div className="text-gray-500 text-sm">Supported Format</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
};

export default Upload;
