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
export type TCronicalDisease = {
  id: string;
  text: string;
  paymentPlan: Array<TPaymentPlan>;
};

type TTakeCareOption = {
  id: string;
  text: string;
};

export type TAnnaOptions = {
  diseases: Array<TOption>;
  turns: Array<TOption>;
  cronicalDiseases: Array<TCronicalDisease>;
  takeCareOptions: Array<TTakeCareOption>;
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
    const takeCareOptions = await prisma.takeCareOptions.findMany();

    return { diseases, turns, cronicalDiseases, takeCareOptions };
  } catch (error) {
    throw new Error('Error getting options');
  }
};
