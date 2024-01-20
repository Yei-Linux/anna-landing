import { useNotificationStore, useStepsStore } from '../store';
import axios from 'axios';
import { ERROR_WAITLIST_MESSAGE } from '../constants';

export const useRequestAnnaCare = () => {
  const { open } = useNotificationStore();
  const { nextSignInStep } = useStepsStore();

  const requestAnnaCare = async (data: {
    paymentPlansId?: string;
    email: string;
  }) => {
    try {
      const { data: response } = await axios.post(
        '/api/anna/request-anna-care',
        data
      );

      if (response?.error) {
        open({ severity: 'error', message: ERROR_WAITLIST_MESSAGE });
        return;
      }

      nextSignInStep();
      open({
        severity: 'success',
        message: response.message,
      });
    } catch (error) {}
  };

  return { requestAnnaCare };
};
