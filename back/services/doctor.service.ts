import prisma from '../config/prisma';

export const getDoctorByEmail = async (email: string) => {
  try {
    const doctor = await prisma.doctors.findFirst({
      where: {
        email,
      },
    });

    return doctor;
  } catch (error) {
    throw new Error('Error searching a doctor');
  }
};

export interface ICreateDoctor {
  email: string;
  password: string;
  fullName: string;
  documentNumber: string;
}
export const createDoctor = async (doctorReq: ICreateDoctor) => {
  try {
    const doctor = await prisma.doctors.create({
      data: doctorReq,
    });

    return doctor;
  } catch (error) {
    throw new Error('Error creating a doctor');
  }
};
