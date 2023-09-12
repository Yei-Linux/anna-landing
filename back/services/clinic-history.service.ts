import prisma from '../config/prisma';

interface IPatientClinicHistory {
  userId: string;
  civilStatus: string;
  occupation: string;
  background: {
    familyInherited: string;
    personalPathogens: string;
    personalNonPathogens: string;
    gynecologyObstetrics: string;
  };
}
export const getClinicHistoryById = async (clinicHistoryId: string) => {
  try {
    const result = await prisma.clinic_histories.findFirst({
      where: {
        id: clinicHistoryId,
      },
      select: {
        id: true,
        userId: true,
        civilStatus: true,
        occupation: true,
        background: true,
      },
    });

    return result;
  } catch (error) {
    throw new Error('Error getting clinic histories');
  }
};

export const createClinicHistory = async (
  clinicHistory: IPatientClinicHistory
) => {
  try {
    const result = await prisma.clinic_histories.create({
      data: clinicHistory,
    });

    return result;
  } catch (error) {
    throw new Error('Error getting clinic histories');
  }
};

export const updateClinicHistory = async (
  clinicHistory: IPatientClinicHistory,
  id: string
) => {
  try {
    const result = await prisma.clinic_histories.update({
      where: {
        id,
      },
      data: {
        civilStatus: clinicHistory.civilStatus,
        occupation: clinicHistory.occupation,
        background: clinicHistory.background,
      },
    });

    return result;
  } catch (error) {
    throw new Error('Error getting clinic histories');
  }
};

export const countClinicHistories = async (patientId: string) => {
  try {
    const total = await prisma.clinic_histories.count({
      where: { userId: patientId },
    });
    return total;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const getClinicHistoriesByUserId = async (
  skip: number,
  sizeByPage: number,
  userId: string
) => {
  try {
    const resultSet = await prisma.clinic_histories.findMany({
      skip,
      take: sizeByPage,
      where: { userId },
      select: {
        id: true,
        userId: true,
        civilStatus: true,
        occupation: true,
        background: true,
      },
    });

    return resultSet;
  } catch (error) {
    throw new Error('Error creating new diagnosis');
  }
};
