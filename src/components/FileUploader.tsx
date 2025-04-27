
import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Spinner } from '@/components/ui/spinner';

interface FileUploaderProps {
  onFileSelect: (file: File) => void;
  onUploadComplete?: (filePath: string, fileData: {
    title: string;
    filename: string;
    fileSize: number;
    storagePath: string;
  }) => void;
}

const FileUploader = ({ onFileSelect, onUploadComplete }: FileUploaderProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { user } = useAuth();
  
  const supportedFormats = ['video/mp4', 'video/quicktime', 'video/x-msvideo', 'video/x-matroska'];
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      validateAndProcessFile(file);
    }
  };
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      validateAndProcessFile(file);
    }
  };
  
  const validateAndProcessFile = (file: File) => {
    // Check file format
    if (!supportedFormats.includes(file.type)) {
      toast.error('Unsupported file format. Please upload MP4, MOV, AVI, or MKV.');
      return;
    }
    
    // Check file size (100MB for demo purposes)
    if (file.size > 100 * 1024 * 1024) {
      toast.error('File is too large. Maximum size is 100MB for the demo.');
      return;
    }
    
    setSelectedFile(file);
    onFileSelect(file);
  };

  const uploadToSupabase = async () => {
    if (!selectedFile || !user) return;
    
    setIsUploading(true);
    setUploadProgress(0);
    
    try {
      // Create a unique file path with user ID as folder
      const fileExt = selectedFile.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
      const filePath = `${user.id}/${fileName}`;
      
      // Upload file to Supabase Storage
      const { error: uploadError, data } = await supabase.storage
        .from('wedding_videos')
        .upload(filePath, selectedFile, {
          upsert: false,
          onUploadProgress: (progress) => {
            const percent = Math.round((progress.loaded / progress.total) * 100);
            setUploadProgress(percent);
          },
        });
        
      if (uploadError) {
        throw uploadError;
      }
      
      // Insert record into wedding_videos table
      const { error: dbError } = await supabase
        .from('wedding_videos')
        .insert({
          title: selectedFile.name.split('.')[0],
          filename: selectedFile.name,
          file_size: selectedFile.size,
          storage_path: filePath,
          user_id: user.id,
        });
        
      if (dbError) {
        throw dbError;
      }
      
      toast.success('File uploaded successfully!');
      
      if (onUploadComplete) {
        onUploadComplete(filePath, {
          title: selectedFile.name.split('.')[0],
          filename: selectedFile.name,
          fileSize: selectedFile.size,
          storagePath: filePath
        });
      }
    } catch (error: any) {
      console.error('Upload error:', error);
      toast.error(`Upload failed: ${error.message}`);
    } finally {
      setIsUploading(false);
    }
  };
  
  return (
    <div 
      className={`upload-zone ${isDragging ? 'bg-teal-50 border-teal-400' : ''} ${isUploading ? 'opacity-80' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input 
        type="file" 
        id="file-upload" 
        className="hidden" 
        onChange={handleFileChange} 
        accept=".mp4,.mov,.avi,.mkv"
        disabled={isUploading}
      />
      
      {isUploading ? (
        <div className="flex flex-col items-center">
          <Spinner size="md" className="mb-4" />
          <h3 className="text-xl font-medium text-gray-800 mb-1">Uploading: {uploadProgress}%</h3>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: `${uploadProgress}%` }}></div>
          </div>
          <p className="text-gray-500">Please wait while your file is uploading...</p>
        </div>
      ) : (
        <label htmlFor="file-upload" className="flex flex-col items-center cursor-pointer">
          <div className="h-20 w-20 bg-teal-100 rounded-full flex items-center justify-center mb-4">
            <Upload size={40} className="text-teal-500" />
          </div>
          
          {selectedFile ? (
            <>
              <h3 className="text-xl font-medium text-gray-800 mb-1">File selected</h3>
              <p className="text-gray-500 mb-2">{selectedFile.name}</p>
              <p className="text-sm text-gray-400 mb-4">
                {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
              </p>
              <button 
                type="button"
                onClick={uploadToSupabase}
                className="btn-primary"
                disabled={isUploading}
              >
                Upload to Cloud
              </button>
            </>
          ) : (
            <>
              <h3 className="text-xl font-medium text-gray-800 mb-1">Drag & drop your video here</h3>
              <p className="text-gray-500 mb-2">or click to browse files</p>
              <p className="text-sm text-gray-400">
                Supports MP4, MOV, AVI, MKV (max 100MB for demo)
              </p>
            </>
          )}
        </label>
      )}
    </div>
  );
};

export default FileUploader;
