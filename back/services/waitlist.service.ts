import prisma from '../config/prisma';
import { insertTakeCareOptionByUser } from './take-care-options.service';

export interface IWishlistUser {
  email: string;
  cronicDesease?: string;
  fullName: string;
  phone: string;
  paymentPlansId: string;
  takeCareOptionsSelected: string[];
}
export const joinToWaitlist = async (user: IWishlistUser) => {
  try {
    const userFound = await prisma.user.findUnique({
      where: { email: user.email },
    });

    if (userFound) {
      return 'Ya te registraste en nuestra lista de espera. Estaremos en contacto!';
    }

    const userCreated = await prisma.user.create({
      data: {
        cronicalDiseasesId: user.cronicDesease,
        email: user.email,
        fullName: user.fullName,
        phone: user.phone,
        paymentPlansId: user.paymentPlansId,
        approved: false,
      },
    });
    await insertTakeCareOptionByUser(
      user.takeCareOptionsSelected,
      userCreated.id
    );

    return 'Acabas de unirte a nuestra lista de espera. Estaremos en contacto! ';
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
