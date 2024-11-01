// publicacion.ts
import { apiRequest } from '@/app/lib/api';

export async function postBlog(postData: any) {
    return apiRequest('http://localhost:8000/api/blog_posts', 'POST', postData, {
        'Content-Type': 'application/ld+json',
        Accept: 'application/ld+json',
    });
}
