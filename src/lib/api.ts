const isServer = typeof window === "undefined";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || (isServer ? 'http://127.0.0.1:8001/api/v1' : '/api-backend/v1');

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
