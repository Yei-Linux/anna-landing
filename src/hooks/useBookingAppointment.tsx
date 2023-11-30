import { ICreateAppointment } from '../../back/services';
import { newBookingAppointment } from '../services/booking-appointment';
import { useSignInStore, useStepsStore } from '../store';

export const useBookingAppointment = () => {
  const { setCurrentSignInStep } = useStepsStore();
  const { toggleSignIn } = useSignInStore();
  const handlerBooking = async (req: ICreateAppointment) => {
    const success = await newBookingAppointment(req);
    if (!success) return;

    toggleSignIn();
    setCurrentSignInStep(1);
  };

  return { handlerBooking };
};
