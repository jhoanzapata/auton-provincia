import { useState, useRef, useEffect, useCallback } from 'react';
import type { VideoData } from '../config/staticData';

export function useVideoPlayer(plVideos: VideoData[]) {
  const [vActiveIndex, setVActiveIndex] = useState(0);
  const vVideoRef = useRef<HTMLVideoElement>(null);
  const vMountedRef = useRef(true);

  const cHandleThumbClick = useCallback((index: number) => {
    setVActiveIndex(index);
    setTimeout(() => {
      if (vVideoRef.current) {
        vVideoRef.current.currentTime = 0;
        vVideoRef.current.play().catch(() => {});
      }
    }, 50);
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

  // Reproducir cuando cambia de video por autoplay/ended
  useEffect(() => {
    if (plVideos.length === 0) return;
    const vVideoElement = vVideoRef.current;
    if (!vVideoElement) return;
    vVideoElement.load();
  }, [vActiveIndex, plVideos.length]);

  return { 
    vActiveIndex, 
    vVideoRef, 
    cHandleThumbClick, 
    cHandleVideoEnd 
  };
}
