export const bannerData = {
  carousel: {
    type: "carousel",
    images: [
      { image: "https://picsum.photos/1000/500", link: "/productos/nuevo", text: "Esto es un texto de ejemplo" },
      { image: "https://picsum.photos/1100/500", link: "/ofertas", text: "" },
      { image: "https://picsum.photos/1200/500", link: "/contacto", text: "" },
      { image: "https://picsum.photos/1000/500", link: "/productos/nuevo", text: "Esto es un texto de ejemplo" },
    ]
  },
  static: {
    type: "static",
    image: { image: "https://picsum.photos/1000/500", link: "/productos/nuevo", text: "Esto es un texto de ejemplo" },
  },
};
export const categoriesData = [
  { name: "Gaming", image: "https://picsum.photos/1000/300", link: "/category/gaming", slug: "gaming" },
  { name: "Wearables", image: "https://picsum.photos/1100/300", link: "/category/wearables", slug: "wearables" },
  { name: "Audio", image: "https://picsum.photos/1200/300", link: "/category/audio", slug: "audio" },
  { name: "Peripherals", image: "https://picsum.photos/1000/300", link: "/category/peripherals", slug: "peripherals" },
  { name: "Displays", image: "https://picsum.photos/1150/300", link: "/category/displays", slug: "displays" },
  { name: "Computers", image: "https://picsum.photos/1100/300", link: "/category/computers", slug: "computers" },
  { name: "Smart Home", image: "https://picsum.photos/1200/300", link: "/category/smart-home", slug: "smart-home" },
  { name: "Accessories", image: "https://picsum.photos/1100/300", link: "/category/accessories", slug: "accessories" },
  { name: "Storage", image: "https://picsum.photos/1150/300", link: "/category/storage", slug: "storage" },
  { name: "All", image: "https://picsum.photos/1150/300", link: "/category/all", slug: "all" }

];


export const popularCategories = categoriesData.slice(0, 6);

export const products = [
  {
    name: "Wireless Headphones",
    image: "https://picsum.photos/1000/300",
    price: 120,
    description: "High-quality wireless headphones with noise cancellation.",
    link: "/product/wireless-headphones",
    category: "Audio",
    slugCategory: "audio",
    slugName: "wireless-headphones",
    rating: 4.7,
    discount: 10,
  },
  {
    name: "Smartwatch Pro",
    image: "https://picsum.photos/1150/300",
    price: 199,
    description: "Feature-packed smartwatch with fitness tracking.",
    link: "/product/smartwatch-pro",
    category: "Wearables",
    slugCategory: "wearables",
    slugName: "smartwatch-pro",
    rating: 4.5,
  },
  {
    name: "Gaming Mouse X",
    image: "https://picsum.photos/900/300",
    price: 49,
    description: "Ergonomic gaming mouse with programmable buttons.",
    link: "/product/gaming-mouse-x",
    category: "Gaming",
    slugCategory: "gaming",
    slugName: "gaming-mouse-x",
    rating: 4.6,
    discount: 5,
  },
  {
    name: "Mechanical Keyboard",
    image: "https://picsum.photos/1100/300",
    price: 89,
    description: "RGB mechanical keyboard with customizable keys.",
    link: "/product/mechanical-keyboard",
    category: "Peripherals",
    slugCategory: "peripherals",
    slugName: "mechanical-keyboard",
    rating: 4.8,
  },
  {
    name: "4K Monitor 27\"",
    image: "https://picsum.photos/1100/300",
    price: 299,
    description: "Stunning 4K monitor with ultra-thin bezels.",
    link: "/product/4k-monitor",
    category: "Displays",
    slugCategory: "displays",
    slugName: "4k-monitor-27",
    rating: 4.9,
    discount: 15,
  },
  {
    name: "Gaming Laptop",
    image: "https://picsum.photos/1100/300",
    price: 1299,
    description: "High-performance gaming laptop with RTX graphics.",
    link: "/product/gaming-laptop",
    category: "Computers",
    slugCategory: "computers",
    slugName: "gaming-laptop",
    rating: 4.7,
  },
  {
    name: "Smart Home Speaker",
    image: "https://picsum.photos/1100/300",
    price: 79,
    description: "Voice-controlled smart home speaker with great audio.",
    link: "/product/smart-home-speaker",
    category: "Smart Home",
    slugCategory: "smart-home",
    slugName: "smart-home-speaker",
    rating: 4.6,
  },
  {
    name: "Smart Light Bulbs",
    image: "https://picsum.photos/1100/300",
    price: 39,
    description: "Color-changing smart light bulbs with voice control.",
    link: "/product/smart-light-bulbs",
    category: "Smart Home",
    slugCategory: "smart-home",
    slugName: "smart-light-bulbs",
    rating: 4.8,
  },
  {
    name: "Noise Cancelling Earbuds",
    image: "https://picsum.photos/1100/300",
    price: 129,
    description: "Compact and powerful noise-canceling earbuds.",
    link: "/product/noise-cancelling-earbuds",
    category: "Audio",
    slugCategory: "audio",
    slugName: "noise-cancelling-earbuds",
    rating: 4.6,
  },
  {
    name: "Wireless Charger",
    image: "https://picsum.photos/1100/300",
    price: 39,
    description: "Fast wireless charger with sleek design.",
    link: "/product/wireless-charger",
    category: "Accessories",
    slugCategory: "accessories",
    slugName: "wireless-charger",
    rating: 4.4,
  },
  {
    name: "Portable SSD 1TB",
    image: "https://picsum.photos/1100/300",
    price: 119,
    description: "Fast and reliable portable SSD with USB-C.",
    link: "/product/portable-ssd",
    category: "Storage",
    slugCategory: "storage",
    slugName: "portable-ssd-1tb",
    rating: 4.9,
  }
];


export const popularProducts = products.slice(0, 4);

