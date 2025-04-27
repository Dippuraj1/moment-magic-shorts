
import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import { toast } from 'sonner';

interface FileUploaderProps {
  onFileSelect: (file: File) => void;
}

const FileUploader = ({ onFileSelect }: FileUploaderProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
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
    toast.success('File selected successfully!');
  };
  
  return (
    <div 
      className={`upload-zone ${isDragging ? 'bg-teal-50 border-teal-400' : ''}`}
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
      />
      
      <label htmlFor="file-upload" className="flex flex-col items-center cursor-pointer">
        <div className="h-20 w-20 bg-teal-100 rounded-full flex items-center justify-center mb-4">
          <Upload size={40} className="text-teal-500" />
        </div>
        
        {selectedFile ? (
          <>
            <h3 className="text-xl font-medium text-gray-800 mb-1">File selected</h3>
            <p className="text-gray-500 mb-2">{selectedFile.name}</p>
            <p className="text-sm text-gray-400">
              {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
            </p>
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
    </div>
  );
};

export default FileUploader;
