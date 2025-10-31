import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sixhourlayover.com' // 🔁 replace with your domain

  const routes = [
    '/',
    '/pricing',
    '/how-it-works',
    '/about',
    '/seattle-layover-tour',
    '/6-hour-layover-seattle',
    '/7-hour-layover-seattle',
    '/8-hour-layover-seattle',
    '/faq',
    '/contact',
  ]

  const lastModified = new Date()

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }))
}
