import prisma from '../config/prisma';

export interface IRequestPaymentUser {
  email: string;
  paymentPlansId: string;
}
export const requestAnnaCare = async (user: IRequestPaymentUser) => {
  try {
    const userFound = await prisma.user.findUnique({
      where: { email: user.email },
    });

    if (userFound?.requestedPaymentPlansId) {
      return 'Actualmente tienes una solicitud para obtener tu plan care plus. Estaremos en contacto!';
    }

    await prisma.user.update({
      where: { email: user.email },
      data: { requestedPaymentPlansId: user.paymentPlansId },
    });

    return 'Acabas de enviar tu solicitud para obtener tu plan care plus. Estaremos en contacto! ';
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
