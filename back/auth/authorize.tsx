import { compare } from 'bcryptjs';
import prisma from '../config/prisma';

export const authorize = async (
  credentials: Record<'email' | 'password', string> | undefined
) => {
  if (!credentials?.email || !credentials.password) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: {
      email: credentials.email,
    },
  });

  if (!user) {
    return null;
  }

  const isSamePassword = await compare(credentials.password, user.password!);
  if (!isSamePassword) {
    return null;
  }

  return {
    id: user.id,
    email: user.email,
    fullName: user.fullName,
    paymentPlansId: user.paymentPlansId,
    requestedPaymentPlansId: user.paymentPlansId,
    cronicalDiseasesId: user.cronicalDiseasesId,
    randomKey: 'b41f9146-ca61-41dd-80f4-079625f82fc2',
  };
};
