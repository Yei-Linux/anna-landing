import prisma from '../config/prisma';

export interface ICreateAppointment {
  diseaseOption: number;
  turn: number;
  day: string;
  userId: string;
}

export const createAppointment = async (req: ICreateAppointment) => {
  try {
    const appointmentCreated = await prisma.bookingAppointments.create({
      data: req,
    });

    return appointmentCreated;
  } catch (error) {
    throw new Error('Error creating new appointment');
  }
};
