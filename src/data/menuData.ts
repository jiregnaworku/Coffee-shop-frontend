export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  quantity?: number;
}

export const menuCategories = [
  'All',
  'Hot Coffee',
  'Cold Coffee',
  'Pastries',
  'Sandwiches',
  'Desserts'
];

export const menuItems: MenuItem[] = [
  // Hot Coffee
  {
    id: 1,
    name: 'Espresso',
    description: 'Rich and bold single shot of coffee',
    price: 3.50,
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=300&h=300&fit=crop',
    category: 'Hot Coffee'
  },
  {
    id: 2,
    name: 'Americano',
    description: 'Espresso diluted with hot water',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300&h=300&fit=crop',
    category: 'Hot Coffee'
  },
  {
    id: 3,
    name: 'Cappuccino',
    description: 'Espresso with steamed milk foam',
    price: 5.50,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=300&fit=crop',
    category: 'Hot Coffee'
  },
  {
    id: 4,
    name: 'Latte',
    description: 'Espresso with steamed milk',
    price: 5.75,
    image: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?w=300&h=300&fit=crop',
    category: 'Hot Coffee'
  },

  // Cold Coffee
  {
    id: 5,
    name: 'Iced Coffee',
    description: 'Chilled coffee served over ice',
    price: 4.25,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=300&fit=crop',
    category: 'Cold Coffee'
  },
  {
    id: 6,
    name: 'Cold Brew',
    description: 'Smooth, cold coffee brewed for 12 hours',
    price: 4.75,
    image: 'https://images.unsplash.com/photo-1578314683711-9d2b07c16ca1?w=300&h=300&fit=crop',
    category: 'Cold Coffee'
  },
  {
    id: 7,
    name: 'Frappuccino',
    description: 'Blended coffee drink with milk and ice',
    price: 6.25,
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300&h=300&fit=crop',
    category: 'Cold Coffee'
  },

  // Pastries
  {
    id: 8,
    name: 'Croissant',
    description: 'Buttery, flaky French pastry',
    price: 3.75,
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=300&fit=crop',
    category: 'Pastries'
  },
  {
    id: 9,
    name: 'Chocolate Muffin',
    description: 'Rich chocolate muffin with chocolate chips',
    price: 4.25,
    image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?w=300&h=300&fit=crop',
    category: 'Pastries'
  },
  {
    id: 10,
    name: 'Blueberry Danish',
    description: 'Flaky pastry with blueberry filling',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop',
    category: 'Pastries'
  },

  // Sandwiches
  {
    id: 11,
    name: 'Turkey Club',
    description: 'Sliced turkey with bacon, lettuce, and tomato',
    price: 8.95,
    image: 'https://images.unsplash.com/photo-1559054663-e431ec5e6e13?w=300&h=300&fit=crop',
    category: 'Sandwiches'
  },
  {
    id: 12,
    name: 'Veggie Wrap',
    description: 'Grilled vegetables with hummus in a tortilla',
    price: 7.95,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=300&fit=crop',
    category: 'Sandwiches'
  },

  // Desserts
  {
    id: 13,
    name: 'Chocolate Cake',
    description: 'Rich chocolate layer cake',
    price: 6.50,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop',
    category: 'Desserts'
  },
  {
    id: 14,
    name: 'Tiramisu',
    description: 'Classic Italian dessert with coffee and mascarpone',
    price: 7.25,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&h=300&fit=crop',
    category: 'Desserts'
  }
];
