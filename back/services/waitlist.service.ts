import prisma from '../config/prisma';

export interface IWishlistUser {
  email: string;
}
export const joinToWaitlist = async (user: IWishlistUser) => {
  try {
    const userFound = await prisma.user.findUnique({
      where: { email: user.email },
    });

    if (userFound) {
      return 'Ya te registraste en nuestra lista de espera. Estaremos en contacto!';
    }

    await prisma.user.create({ data: { ...user, approved: false } });

    return 'Acabas de unirte a nuestra lista de espera. Estaremos en contacto! ';
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
