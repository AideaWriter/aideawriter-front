import {MetadataRoute} from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = `https://aideawriter.app`

    return {
        rules: {
            userAgent: '*',
            allow: ['/', '/features', '/pricing', '/question'],
            disallow: '/api/',
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
