/**
 * ==========================================
 * CENTRAL API CLIENT
 * ==========================================
 * This file is the "menu" of all backend requests. 
 * If a component needs data, it imports `api` from here.
 */

// 1. Check if this code is running in the browser or on the server.
const isServer = typeof window === "undefined";

// 2. Determine the correct Base URL based on the environment:
// - Server-side (SSR): Connects directly to the live staging backend.
// - Client-side (Browser): Uses the Next.js local proxy ('/api-backend/v1') to bypass CORS security blocks.
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || (isServer ? 'https://staging.admin.reddybook247.net/api/v1' : '/api-backend/v1');

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const api = {
  // Contact API
  submitContactForm: async (data: ContactFormData) => {
    const response = await fetch(`${BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Failed to submit contact form: ${response.statusText}`);
    }
    return response.json();
  },

  // Blog Categories API
  getBlogCategories: async () => {
    const response = await fetch(`${BASE_URL}/blog-categories`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      // for nextjs 14 server components we might want revalidate options, but default fetch behavior is fine to start
      next: { revalidate: 3600 } 
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch blog categories: ${response.statusText}`);
    }
    return response.json();
  },

  // Blogs API
  getBlogs: async () => {
    const response = await fetch(`${BASE_URL}/blogs`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      next: { revalidate: 3600 }
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch blogs: ${response.statusText}`);
    }
    return response.json();
  },

  // Latest Blogs API
  getLatestBlogs: async () => {
    const response = await fetch(`${BASE_URL}/latest-blogs`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      next: { revalidate: 3600 }
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch latest blogs: ${response.statusText}`);
    }
    return response.json();
  },

  // Related Blogs API
  getRelatedBlogs: async (id: string | number) => {
    const response = await fetch(`${BASE_URL}/related-blogs/${id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      next: { revalidate: 3600 }
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch related blogs: ${response.statusText}`);
    }
    return response.json();
  },

  // Blog Detail API
  getBlogBySlug: async (slug: string) => {
    const response = await fetch(`${BASE_URL}/blogs/${slug}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      next: { revalidate: 3600 }
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch blog detail: ${response.statusText}`);
    }
    return response.json();
  },

  // Blogs by Category API
  getBlogsByCategory: async (categorySlug: string) => {
    const response = await fetch(`${BASE_URL}/blogs/category/${categorySlug}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      next: { revalidate: 3600 }
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch blogs by category: ${response.statusText}`);
    }
    return response.json();
  },

  // Search Blogs API
  searchBlogs: async (query: string) => {
    const response = await fetch(`${BASE_URL}/search-blogs?search=${encodeURIComponent(query)}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      // Since it's search, we probably don't want to cache it or we want short cache
      next: { revalidate: 60 }
    });
    if (!response.ok) {
      throw new Error(`Failed to search blogs: ${response.statusText}`);
    }
    return response.json();
  },
};
