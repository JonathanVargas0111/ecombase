export interface Product {
    name: string;
    image: string;
    price: number;
    description: string;
    link: string;
    category: string;
    slugCategory: string;
    slugName: string;
    rating: number;
    discount?: number;
};

export interface Category {
  name: string;
  image: string;
  link: string;
  slug: string;
}


export type Categories = 'electronics' | 'home-appliances' | 'fashion' | 'sports-outdoors' | 'beauty-personal-care' |
  'toys-games' | 'automotive' | 'books' | 'health-wellness' | 'groceries' | 'office-supplies' | 'gaming' |
  'furniture' | 'smartphones' | 'wearables' | 'cameras' | 'audio-headphones' | 'laptops-computers' |
  'accessories' | 'watches' | 'all';