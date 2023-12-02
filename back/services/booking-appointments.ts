import prisma from '../config/prisma';

export interface ICreateAppointment {
  diseasesId: string;
  turnsId: string;
  userId: string;
  day: string;
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

export const getAppointments = async (email: string) => {
  try {
    const user = await prisma.user.findFirst({ where: { email } });
    if (!user) throw new Error('User not found');

    const appointments = await prisma.bookingAppointments.findMany({
      where: {
        userId: user.id,
        NOT: [
          {
            turnsId: null,
            diseasesId: null,
          },
        ],
      },
      select: {
        id: true,
        day: true,
        turn: true,
        diseaseOption: true,
        createdAt: true,
      },
    });

    return appointments.map(({ id, day, turn, diseaseOption, createdAt }) => ({
      id,
      day,
      turn: turn?.text,
      diseaseOption: diseaseOption?.text,
      createdAt,
    }));
  } catch (error) {
    throw new Error('Getting new appointments');
  }
};
