import posts from '@/data/posts.json';

export interface BlogPost {
  id?: number;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: string;
}

export const blogPosts = posts as BlogPost[];
