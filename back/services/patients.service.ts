import prisma from '../config/prisma';

export const countPatients = async () => {
  try {
    const total = await prisma.users.count();
    return total;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const getPatients = async (skip: number, sizeByPage: number) => {
  try {
    const patientsResultSet = await prisma.users.findMany({
      skip,
      take: sizeByPage,
      select: {
        id: true,
        phone: true,
        fullName: true,
        documentNumber: true,
      },
    });
    const patients = patientsResultSet.map((patient) => ({
      ...patient,
    }));
    return patients;
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
