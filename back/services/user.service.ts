import prisma from '../config/prisma';

export const getUsers = async () => {
  const users = await prisma.users.findMany();
  console.log('users', users);
  return users;
};

export const getUserById = () => {};
