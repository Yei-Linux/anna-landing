import prisma from '../config/prisma';

export const countPatients = async () => {
  try {
    const total = await prisma.users.count();
    return total;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export interface IPatient {
  phone: string;
  fullName: string;
  documentNumber: string;
  genderId: string;
}
export const createPatient = async (patient: IPatient) => {
  try {
    return await prisma.users.create({
      data: patient,
    });
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const updatePatient = async (patient: IPatient, id: string) => {
  try {
    return await prisma.users.update({
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

    const patientsResultSet: any = await prisma.users.aggregateRaw({
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
    const patientResultSet = await prisma.users.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
        phone: true,
        fullName: true,
        documentNumber: true,
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
