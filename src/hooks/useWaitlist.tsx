import { TSignInData, useNotificationStore, useStepsStore } from '../store';
import axios from 'axios';
import { ERROR_WAITLIST_MESSAGE } from '../constants';

export const useWaitList = () => {
  const { open } = useNotificationStore();
  const { nextSignInStep } = useStepsStore();

  const joinWaitList = async (
    data: TSignInData & { paymentPlansId?: string }
  ) => {
    try {
      const { data: userJoinned } = await axios.post(
        '/api/anna/waitlist',
        data
      );

      if (userJoinned?.error) {
        open({ severity: 'error', message: ERROR_WAITLIST_MESSAGE });
        return;
      }

      nextSignInStep();
      open({
        severity: 'success',
        message: userJoinned.message,
      });
    } catch (error) {}
  };

  return { joinWaitList };
};
