import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Azwan',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
  ],
  products: [
  ],
};
export default data;

