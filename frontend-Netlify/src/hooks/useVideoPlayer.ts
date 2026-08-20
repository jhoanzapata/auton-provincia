import { useState, useRef, useEffect, useCallback } from 'react';
import type { VideoData } from '../config/staticData';

export function useVideoPlayer(plVideos: VideoData[]) {
  const [vActiveIndex, setVActiveIndex] = useState(0);
  const vVideoRef = useRef<HTMLVideoElement>(null);
  const vMountedRef = useRef(true);

  const cHandleThumbClick = useCallback((index: number) => {
    setVActiveIndex(index);
  }, []);

  const cHandleVideoEnd = useCallback(() => {
    if (plVideos.length === 0) return;
    setVActiveIndex(prev => (prev + 1) % plVideos.length);
  }, [plVideos.length]);

  useEffect(() => {
    if (plVideos.length === 0) return;
    if (vActiveIndex >= plVideos.length) {
      setVActiveIndex(0);
    }
  }, [plVideos.length, vActiveIndex]);

  // Reload and play the video when index changes
  useEffect(() => {
    // Guard: don't try to play if no videos
    if (plVideos.length === 0) return;
    
    vMountedRef.current = true;
    const vVideoElement = vVideoRef.current;
    if (!vVideoElement) return;
    
    vVideoElement.load();
    const cPlayVideo = () => {
      if (!vMountedRef.current) return;
      vVideoElement.play().catch(() => {});
    };
    vVideoElement.addEventListener('canplay', cPlayVideo, { once: true });
    
    return () => {
      vMountedRef.current = false;
      vVideoElement.removeEventListener('canplay', cPlayVideo);
    };
  }, [vActiveIndex, plVideos.length]);

  return { 
    activeIndex: vActiveIndex, 
    videoRef: vVideoRef, 
    cHandleThumbClick, 
    cHandleVideoEnd 
  };
}
