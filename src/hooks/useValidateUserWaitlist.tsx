import axios from 'axios';
import { useLandingBotStore, useSignInStore, useStepsStore } from '../store';

export const useValidateUserWaitlist = () => {
  const { flags } = useLandingBotStore();
  const { signInData, setSigninData } = useSignInStore();
  const { nextSignInStep } = useStepsStore();

  const validateUserFromWaitList = async (email: string) => {
    if (flags?.signup_controller.enabled) return;

    try {
      const { data: userResponse } = await axios.post(
        '/api/anna/is-user-approved',
        {
          email,
        }
      );

      if (!userResponse?.data) {
        nextSignInStep();
        return;
      }

      setSigninData({ approved: !!userResponse?.data?.approved });
      nextSignInStep();
    } catch (error) {
      nextSignInStep();
    }
  };

  return { validateUserFromWaitList };
};
