import '@testing-library/jest-dom';

// Mock fetch for tests - return projects data
const mockProjects = [
  { id: "proj-01", title: "Proyecto 1", description: "Desc 1", mediaUrl: "/images/proyectos/proyecto-1_5408c536.webp", mediaType: "IMAGE", category: "proyecto" },
  { id: "proj-02", title: "Proyecto 2", description: "Desc 2", mediaUrl: "/images/proyectos/proyecto-2_83608998.webp", mediaType: "IMAGE", category: "proyecto" },
  { id: "proj-03", title: "Proyecto 3", description: "Desc 3", mediaUrl: "/images/proyectos/proyecto-3_2d646782.webp", mediaType: "IMAGE", category: "proyecto" },
  { id: "proj-04", title: "Proyecto 4", description: "Desc 4", mediaUrl: "/images/proyectos/proyecto-4_b317de20.webp", mediaType: "IMAGE", category: "proyecto" },
  { id: "proj-05", title: "Proyecto 5", description: "Desc 5", mediaUrl: "/images/proyectos/proyecto-5_e1081bd2.webp", mediaType: "IMAGE", category: "proyecto" },
  { id: "proj-06", title: "Proyecto 6", description: "Desc 6", mediaUrl: "/images/proyectos/proyecto-6_b699e615.webp", mediaType: "IMAGE", category: "proyecto" },
  { id: "proj-07", title: "Proyecto 7", description: "Desc 7", mediaUrl: "/images/proyectos/proyecto-7_3bc9f416.webp", mediaType: "IMAGE", category: "proyecto" },
  { id: "proj-08", title: "Proyecto 8", description: "Desc 8", mediaUrl: "/images/proyectos/proyecto-8_70219723.webp", mediaType: "IMAGE", category: "proyecto" },
];

const mockVideos = [
  { src: "/videos/proyectos/IMG_1061_f1cfebc9.mp4", title: "Puerta Seccional", description: "Desc seccional" },
  { src: "/videos/proyectos/IMG_1152_93e6415f.mp4", title: "Puerta Corredera", description: "Desc corredera" },
];

global.fetch = vi.fn((url: string) => {
  if (url.includes('/data/projects.json')) {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockProjects),
    });
  }
  if (url.includes('/data/videos.json')) {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockVideos),
    });
  }
  return Promise.reject(new Error('Not mocked: ' + url));
});
