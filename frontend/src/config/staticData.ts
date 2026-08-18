export interface IProject {
  id: string;
  title: string;
  description: string;
  mediaUrl: string;
  mediaType: 'IMAGE' | 'VIDEO';
  category: string;
}

export interface VideoData {
  src: string;
  title: string;
  description: string;
  poster?: string; // Optional thumbnail/poster image
}

// Fetch en runtime — siempre fresco, sin rebuild
export async function loadProjects(): Promise<IProject[]> {
  const res = await fetch('/data/projects.json', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to load projects');
  return res.json();
}

export async function loadVideos(): Promise<VideoData[]> {
  const res = await fetch('/data/videos.json', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to load videos');
  return res.json();
}

// Para compatibilidad con código existente (deprecated)
export const lMvpProjects: IProject[] = [];
export const lVideos: VideoData[] = [];
