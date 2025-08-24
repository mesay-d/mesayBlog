import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const nextConfig = (phase: string): NextConfig => {
  
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    // Development environment
    return {
      env: {
        MONGODB_USERNAME: 'mesayezekiel',
        MONGODB_PASSWORD: 'mesayezekiel',
       
      },
        experimental: {
    optimizeCss: false, // if you added this earlier to bypass lightningcss
  },
    };
  }

  // Production environment
  return {
    env: {
      MONGODB_USERNAME: 'mesayezekiel',
      MONGODB_PASSWORD: 'mesayezekiel',
  
    },
      experimental: {
    optimizeCss: false, // if you added this earlier to bypass lightningcss
  },
  };
};

export default nextConfig;
