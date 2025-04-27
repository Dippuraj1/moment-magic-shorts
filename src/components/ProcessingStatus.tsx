
import React, { useState, useEffect } from 'react';

interface ProcessingStatusProps {
  isProcessing: boolean;
  progress: number;
  statusText: string;
  onComplete?: () => void;
}

const ProcessingStatus = ({ 
  isProcessing, 
  progress, 
  statusText,
  onComplete
}: ProcessingStatusProps) => {
  const [dots, setDots] = useState('');
  
  useEffect(() => {
    if (!isProcessing) return;
    
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev.length >= 3) return '';
        return prev + '.';
      });
    }, 500);
    
    return () => clearInterval(interval);
  }, [isProcessing]);
  
  useEffect(() => {
    if (progress >= 100 && onComplete) {
      const timer = setTimeout(() => {
        onComplete();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);
  
  if (!isProcessing) return null;
  
  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle 
              className="text-teal-100" 
              stroke="currentColor" 
              strokeWidth="10" 
              fill="transparent" 
              r="40" 
              cx="50" 
              cy="50" 
            />
            <circle 
              className="text-teal-500 transition-all duration-300" 
              stroke="currentColor" 
              strokeWidth="10" 
              fill="transparent" 
              r="40" 
              cx="50" 
              cy="50" 
              strokeDasharray={`${2 * Math.PI * 40}`}
              strokeDashoffset={`${2 * Math.PI * 40 * (1 - progress / 100)}`}
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-teal-500">
            {progress}%
          </div>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
        {statusText}<span className="animate-pulse">{dots}</span>
      </h3>
      
      <div className="progress-bar-container mt-4">
        <div 
          className="h-full bg-gradient-to-r from-teal-300 to-teal-500 transition-all duration-300 rounded-full" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <p className="text-center text-gray-500 mt-4 text-sm">
        This might take a few minutes. Sit back and relax!
      </p>
    </div>
  );
};

export default ProcessingStatus;
