import { MetadataRoute } from 'next';
import { getAllSchemes } from '@/lib/schemes';

export default function sitemap(): MetadataRoute.Sitemap {
  const schemes = getAllSchemes();
  const baseUrl = 'https://schemebot-india.vercel.app';

  const schemeUrls = schemes.map((scheme) => ({
    url: `${baseUrl}/schemes/${scheme.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const mainPages = [
    '',
    '/schemes',
    '/chat',
    '/about',
    '/saved',
    '/dashboard',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1.0,
  }));

  return [...mainPages, ...schemeUrls];
}
