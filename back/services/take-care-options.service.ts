import prisma from '../config/prisma';

export const insertTakeCareOptionByUser = async (
  takeOptions: string[],
  userId: string
) => {
  await prisma.userTakeCareOptions.createMany({
    data: takeOptions.map((takeCareOptionsId) => ({
      userId,
      takeCareOptionsId,
    })),
  });
};
