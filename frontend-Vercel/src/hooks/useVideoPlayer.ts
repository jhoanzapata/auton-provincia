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

  // Cargar y reproducir cuando conmuta vActiveIndex
  useEffect(() => {
    if (plVideos.length === 0) return;
    const vVideoElement = vVideoRef.current;
    if (!vVideoElement) return;
    vVideoElement.load();
    vVideoElement.play().catch(() => {});
  }, [vActiveIndex, plVideos.length]);

  return { 
    vActiveIndex, 
    vVideoRef, 
    cHandleThumbClick, 
    cHandleVideoEnd 
  };
}
