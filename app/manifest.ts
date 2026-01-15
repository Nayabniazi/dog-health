import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Medicina Regenerativa Veterinaria BaDog',
    short_name: 'BaDog',
    description: 'Terapia de Células Madre y PRP para mascotas en León, Guanajuato.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/images/favicon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/favicon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
