import { Prisma } from '@prisma/client';
import prisma from '../config/prisma';

interface IClinicHistory {
  currentCondition: {
    beginning: string;
    evolution: string;
    currentStatus: string;
  };
  generalSymptoms: string;
  interrogrationByDevicesAndSystem: {
    digestiveSystem: string;
    cardiovascularSystem: string;
    respiratorySystem: string;
    urinarySystem: string;
    genitalSystem: string;
    bloodSystem: string;
    endocrineSystem: string;
    musculoskeletalSystem: string;
    nervousSystem: string;
    sensorySystem: string;
    psychosomatic: string;
  };
}

interface IDiagnosisDetailsInformation {
  physicalExploration: {
    vitalSigns: {
      FC: string;
      TA: string;
      FR: string;
      temperature: string;
      currentWeight: string;
      previousWeight: string;
      idealWeight: string;
    };
    generalExploration: string;
  };
  results: {
    comments: string;
    diagnosis: string;
    pronostic: string;
    treatment: string;
  };
}

interface IDiagnosisDetails {
  clinicHistory: IClinicHistory;
  diagnosisInformation: IDiagnosisDetailsInformation;
}

export interface ICreateNewDiagnosis<
  T = Prisma.InputJsonValue | IDiagnosisDetails
> {
  userId: string;
  title: string;
  description: string;
  creationTime: string;
  diagnosisDetails: T;
}

export const updateDiagnosisById = async (
  object: ICreateNewDiagnosis<Prisma.InputJsonValue>,
  id: string
) => {
  try {
    const diagnosisCreated = await prisma.diagnosis.update({
      where: {
        id,
      },
      data: {
        title: object.title,
        description: object.description,
        creationTime: object.creationTime,
        diagnosisDetails: object.diagnosisDetails,
      },
    });

    return diagnosisCreated;
  } catch (error) {
    throw new Error('Error creating new diagnosis');
  }
};

export const createNewDiagnosis = async (
  object: ICreateNewDiagnosis<Prisma.InputJsonValue>
) => {
  try {
    const currentTime = new Date();
    const creationTime = `${currentTime
      .getDate()
      .toString()
      .padStart(2, '0')}/${(currentTime.getMonth() + 1)
      .toString()
      .padStart(2, '0')}/${currentTime.getFullYear()}`;
    const diagnosisCreated = await prisma.diagnosis.create({
      data: { ...object, creationTime },
    });

    return diagnosisCreated;
  } catch (error) {
    throw new Error('Error creating new diagnosis');
  }
};

export const countDiagnosis = async (patientId: string) => {
  try {
    const total = await prisma.diagnosis.count({
      where: { userId: patientId },
    });
    return total;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const getDiagnosis = async (
  skip: number,
  sizeByPage: number,
  userId: string
) => {
  try {
    const diagnosisResultSet = await prisma.diagnosis.findMany({
      skip,
      take: sizeByPage,
      where: { userId },
      select: {
        id: true,
        title: true,
        description: true,
        creationTime: true,
      },
    });

    return diagnosisResultSet;
  } catch (error) {
    throw new Error('Error creating new diagnosis');
  }
};

export const getDiagnosisById = async (id: string) => {
  try {
    const diagnosis = await prisma.diagnosis.findFirst({
      where: { id },
      select: {
        id: true,
        title: true,
        description: true,
        creationTime: true,
        diagnosisDetails: true,
      },
    });

    return diagnosis;
  } catch (error) {
    throw new Error('Error getting diagnosis');
  }
};

export const deleteDiagnosisById = async (diagnosisId: string) => {
  try {
    await prisma.diagnosis.delete({
      where: { id: diagnosisId },
    });
  } catch (error) {
    throw new Error('Error removing diagnosis');
  }
};
