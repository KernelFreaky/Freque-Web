export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  url: string;
}

export const CATEGORIES = [
  'All',
  'Restaurants & Food',
  'Tours & Activities',
  'Resorts & Stays',
  'Local Services',
  'E-commerce & Shops'
] as const;

export type CategoryType = typeof CATEGORIES[number];