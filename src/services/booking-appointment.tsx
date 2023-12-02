import axios from 'axios';
import { ICreateAppointment } from '../../back/services';
import { TBookingAppointment } from '../components/anna-care/Platform/Appointments/Appointments';

export const newBookingAppointment = async (req: ICreateAppointment) => {
  try {
    const { data } = await axios.post('/api/booking-appointment', req);
    return data;
  } catch (error) {
    return undefined;
  }
};

export const getBookingAppointments = async (): Promise<
  Array<TBookingAppointment> | undefined
> => {
  try {
    const { data } = await axios.get('/api/booking-appointment');
    return data;
  } catch (error) {
    return undefined;
  }
};
