
import { supabase } from "@/integrations/supabase/client";

export interface VideoProcessingOptions {
  title?: string;
  duration?: number;
  effects?: string[];
}

export const ShotstackService = {
  async createHighlight(videoPath: string, options?: VideoProcessingOptions) {
    try {
      // Get a signed URL for the video (valid for a short time)
      const { data: signedUrlData, error: signedUrlError } = await supabase
        .storage
        .from('wedding_videos')
        .createSignedUrl(videoPath, 3600); // 1 hour

      if (signedUrlError) {
        throw signedUrlError;
      }

      const { data, error } = await supabase.functions.invoke('shotstack', {
        body: {
          action: 'create-highlight',
          videoUrl: signedUrlData.signedUrl,
          title: options?.title || 'Highlight Reel',
          options: {
            duration: options?.duration || 180, // 3 minutes default
            effects: options?.effects || ['transitions', 'music'],
          }
        }
      });

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Error creating highlight:', error);
      throw error;
    }
  },

  async createShort(videoPath: string, options?: VideoProcessingOptions) {
    try {
      // Get a signed URL for the video
      const { data: signedUrlData, error: signedUrlError } = await supabase
        .storage
        .from('wedding_videos')
        .createSignedUrl(videoPath, 3600);

      if (signedUrlError) {
        throw signedUrlError;
      }

      const { data, error } = await supabase.functions.invoke('shotstack', {
        body: {
          action: 'create-short',
          videoUrl: signedUrlData.signedUrl,
          title: options?.title || 'Short Video',
          options: {
            duration: options?.duration || 30, // 30 seconds default
            effects: options?.effects || ['transitions', 'music'],
          }
        }
      });

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Error creating short:', error);
      throw error;
    }
  },

  async checkStatus(id: string) {
    try {
      const { data, error } = await supabase.functions.invoke('shotstack', {
        body: {
          action: 'check-status',
          options: {
            id
          }
        }
      });

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Error checking status:', error);
      throw error;
    }
  }
};
