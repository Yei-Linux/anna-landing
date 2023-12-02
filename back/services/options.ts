import prisma from '../config/prisma';

type TOption = {
  id: string;
  text: string;
};
type TPaymentPlan = {
  id: string;
  type: any;
  subtitle: string;
  description: string;
  priceInfo: string;
  price: number;
  isPopular: boolean;
};
type TCronicalDisease = {
  id: string;
  text: string;
  paymentPlan: Array<TPaymentPlan>;
};

export type TAnnaOptions = {
  diseases: Array<TOption>;
  turns: Array<TOption>;
  cronicalDiseases: Array<TCronicalDisease>;
};

export const getAnnaOptions = async (): Promise<TAnnaOptions> => {
  try {
    const diseases = await prisma.diseases.findMany();
    const turns = await prisma.turns.findMany();
    const cronicalDiseases = await prisma.cronicalDiseases.findMany({
      select: {
        id: true,
        text: true,
        paymentPlan: {
          select: {
            id: true,
            type: true,
            subtitle: true,
            description: true,
            priceInfo: true,
            price: true,
            isPopular: true,
          },
        },
      },
    });

    return { diseases, turns, cronicalDiseases };
  } catch (error) {
    throw new Error('Error getting options');
  }
};
