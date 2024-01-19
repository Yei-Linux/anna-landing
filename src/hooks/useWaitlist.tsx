import {
  TSignInData,
  useNotificationStore,
  useSignInStore,
  useStepsStore,
} from '../store';
import { TWaitlistForm } from '../types/sign-in';
import axios from 'axios';
import { ERROR_WAITLIST_MESSAGE } from '../constants';

export const useWaitList = () => {
  const { open } = useNotificationStore();
  const { setCurrentSignInStep } = useStepsStore();
  const { toggleSignIn } = useSignInStore();

  const joinWaitList = async (data: TSignInData) => {
    try {
      const { data: userJoinned } = await axios.post(
        '/api/anna/waitlist',
        data
      );

      if (userJoinned?.error) {
        open({ severity: 'error', message: ERROR_WAITLIST_MESSAGE });
        return;
      }

      toggleSignIn();
      setCurrentSignInStep(1);
      open({
        severity: 'success',
        message: userJoinned.message,
      });
    } catch (error) {}
  };

  return { joinWaitList };
};
