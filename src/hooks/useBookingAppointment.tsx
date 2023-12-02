import { useRouter } from 'next/router';
import { ICreateAppointment } from '../../back/services';
import { newBookingAppointment } from '../services/booking-appointment';
import { useNotificationStore, useSignInStore, useStepsStore } from '../store';
import { ERROR_MESSAGE } from '../constants';

export const useBookingAppointment = () => {
  const { push } = useRouter();
  const { setCurrentSignInStep } = useStepsStore();
  const { toggleSignIn } = useSignInStore();
  const { open } = useNotificationStore();

  const handlerBooking = async (req: ICreateAppointment, link: string) => {
    const success = await newBookingAppointment(req);
    if (!success) {
      open({
        severity: 'error',
        message: ERROR_MESSAGE,
      });
      return;
    }

    toggleSignIn();
    setCurrentSignInStep(1);
    open({ severity: 'success', message: 'Tu cita acaba de ser registrada!' });
    push(link);
  };

  return { handlerBooking };
};
