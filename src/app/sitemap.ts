import { MetadataRoute } from 'next';
import { COMMUNICATION_TYPE_META } from '@/lib/constants';

const BASE_url = 'https://communicationtype16.com';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: BASE_url,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${BASE_url}/types`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${BASE_url}/diagnosis`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_url}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${BASE_url}/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${BASE_url}/terms`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        ...COMMUNICATION_TYPE_META.map((type) => ({
            url: `${BASE_url}/types/${type.code}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        })),
    ];
}
