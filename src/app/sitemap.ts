import {MetadataRoute} from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = `https://aideawriter.app`

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: `${baseUrl}/features`,
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: `${baseUrl}/pricing`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/question`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/pages/auth/signin`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/pages/auth/signup`,
            lastModified: new Date(),
        },
    ]
}
