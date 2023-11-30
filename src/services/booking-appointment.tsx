import axios from 'axios';
import { ICreateAppointment } from '../../back/services';

export const newBookingAppointment = async (req: ICreateAppointment) => {
  try {
    const { data } = await axios.post('/api/booking-appointment', req);
    return data;
  } catch (error) {
    return undefined;
  }
};
