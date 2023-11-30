import { email } from 'react-admin';
import prisma from '../config/prisma';

export const countPatients = async () => {
  try {
    const total = await prisma.user.count();
    return total;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export interface IPatient {
  phone?: string;
  fullName?: string;
  documentNumber?: string;
  genderId?: string;
  hasAnyCronicDesease: boolean;
  cronicDesease: number;
}
export const createPatient = async (patient: IPatient) => {
  try {
    return await prisma.user.create({
      data: patient,
    });
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export interface ISignUpPatient {
  email: string;
  password: string;
}
export const signUpPatient = async (patient: ISignUpPatient) => {
  try {
    const userFound = await prisma.user.findUnique({
      where: { email: patient.email },
    });

    const OrUserDoesntExistsEitherHasOnlyEmail =
      !userFound || (userFound && !userFound.password);
    if (OrUserDoesntExistsEitherHasOnlyEmail) {
      return await prisma.user.upsert({
        where: { email: patient.email, password: '' },
        update: patient,
        create: patient,
      });
    }

    return userFound;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const suscribeByEmail = async (
  carePlusPlanPrice: number,
  email: string
) => {
  try {
    return await prisma.user.update({
      where: {
        email,
      },
      data: {
        carePlusPlanPrice,
      },
    });
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const updatePatientByEmail = async (
  patient: IPatient,
  email: string
) => {
  try {
    return await prisma.user.update({
      where: {
        email,
      },
      data: patient,
    });
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const updatePatient = async (patient: IPatient, id: string) => {
  try {
    return await prisma.user.update({
      where: {
        id,
      },
      data: patient,
    });
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const getPatients = async (
  skip: number,
  sizeByPage: number,
  search?: string
) => {
  try {
    let pipeline: any = [{ $skip: skip }, { $limit: sizeByPage }];

    if (search) {
      pipeline = [
        {
          $match: {
            $or: [
              { fullName: { $regex: search, $options: 'i' } },
              {
                phone: { $regex: search, $options: 'i' },
              },
              {
                documentNumber: { $regex: search, $options: 'i' },
              },
            ],
          },
        },
        ...pipeline,
      ];
    }

    const patientsResultSet: any = await prisma.user.aggregateRaw({
      pipeline,
    });

    return patientsResultSet?.map(({ _id, ...item }: any) => ({
      ...item,
      id: _id['$oid'],
    }));
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const getPatientById = async (id: string) => {
  try {
    const patientResultSet = await prisma.user.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
        phone: true,
        fullName: true,
        documentNumber: true,
        email: true,
        isInactive: true,
        genderId: true,
        clinic_histories: true,
      },
    });

    if (!patientResultSet) throw new Error('Patient not found');
    const patient = {
      ...patientResultSet,
      genderId: undefined,
      gender: patientResultSet.genderId === '1' ? 'Male' : 'Female',
    };

    return patient;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
