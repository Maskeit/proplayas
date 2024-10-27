// lib/auth.ts
import { apiRequest } from '@/app/lib/api';

//  replace route to https://proplayas.org/auth in production
export async function login(email: string, password: string) {
  return apiRequest('http://localhost:8000/auth', 'POST', { email, password }, {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  });
}

export async function register(userData: any) {
  return apiRequest('http://localhost:8000/api/users', 'POST', userData, {
    'Content-Type': 'application/ld+json',
    Accept: 'application/ld+json',
  });

}