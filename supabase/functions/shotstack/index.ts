
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const SHOTSTACK_API_KEY = Deno.env.get('SHOTSTACK_API_KEY');
    const SHOTSTACK_HOST = "https://api.shotstack.io/v1";
    
    if (!SHOTSTACK_API_KEY) {
      throw new Error("Missing Shotstack API key");
    }

    const { action, videoUrl, title, options } = await req.json();

    if (!action) {
      throw new Error("Missing required parameter: action");
    }

    // Handle different actions
    switch (action) {
      case 'create-highlight': {
        if (!videoUrl) {
          throw new Error("Missing required parameter: videoUrl");
        }

        console.log("Creating highlight reel for:", videoUrl);

        // Call Shotstack API to create a highlight reel
        const response = await fetch(`${SHOTSTACK_HOST}/edit`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": SHOTSTACK_API_KEY
          },
          body: JSON.stringify({
            timeline: {
              soundtrack: {
                src: "https://s3.amazonaws.com/shotstack-assets/music/upbeat.mp3",
                effect: "fadeOut"
              },
              background: "#000000",
              tracks: [
                {
                  clips: [
                    {
                      asset: {
                        type: "video",
                        src: videoUrl,
                        trim: 0
                      },
                      start: 0,
                      length: 10,
                      transition: {
                        in: "fade",
                        out: "fade"
                      }
                    }
                  ]
                }
              ]
            },
            output: {
              format: "mp4",
              resolution: "hd"
            }
          })
        });

        const data = await response.json();
        console.log("Shotstack API response:", data);
        
        return new Response(JSON.stringify(data), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200
        });
      }

      case 'create-short': {
        // Similar implementation for creating shorts
        console.log("Creating short video");
        
        // This would be similar to the highlight reel but with shorter output
        return new Response(JSON.stringify({ message: "Short creation initiated" }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200
        });
      }

      case 'check-status': {
        const { id } = options || {};
        if (!id) {
          throw new Error("Missing required parameter: id");
        }

        // Check the status of a render
        const response = await fetch(`${SHOTSTACK_HOST}/render/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": SHOTSTACK_API_KEY
          }
        });

        const data = await response.json();
        return new Response(JSON.stringify(data), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200
        });
      }

      default:
        throw new Error(`Unknown action: ${action}`);
    }
  } catch (error) {
    console.error("Error in shotstack function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500
    });
  }
});
