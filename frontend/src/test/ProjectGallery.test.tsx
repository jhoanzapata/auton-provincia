import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProjectGallery } from '../components/ProjectGallery';

describe('ProjectGallery', () => {
  it('renders loading state initially', () => {
    render(<ProjectGallery />);
    expect(screen.getByText('Cargando proyectos industriales...')).toBeInTheDocument();
  });

  it('renders projects after loading', async () => {
    render(<ProjectGallery />);
    // Wait for loading to complete - find the h2 heading by role
    const heading = await screen.findByRole('heading', { level: 2, name: /Nuestro.*Legado en Hierro/ });
    expect(heading).toBeInTheDocument();
  });
});
