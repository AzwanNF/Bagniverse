import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Totebag Satu',
      slug: 'totebag-satu',
      category: 'Totebag',
      image: '/images/p1.jpg', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'Totebag',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality Tote bag',
    },
    {
      // _id: '2',
      name: 'Totebag Dua',
      slug: 'totebag-dua',
      category: 'Totebag',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 0,
      brand: 'Totebag',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '3',
      name: 'Totebag Tiga',
      slug: 'totebag-tiga',
      category: 'Totebag',
      image: '/images/p3.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Totebag',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      // _id: '4',
      name: 'Totebag Empat',
      slug: 'totebag-empat',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Totebag',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality Totebag',
    },
  ],
};
export default data;
