import { signIn, useSession } from 'next-auth/react';
import { useNotificationStore, useSignInStore, useStepsStore } from '../store';
import { TSignInForm } from '../types/sign-in';
import axios from 'axios';
import { ERROR_LOGIN_MESSAGE } from '../constants';

export const useSignIn = () => {
  const callbackUrl = '/';
  const { open } = useNotificationStore();
  const { setCurrentSignInStep } = useStepsStore();
  const { toggleSignIn } = useSignInStore();

  const signinHandler = async (data: TSignInForm) => {
    try {
      const { data: user } = await axios.post('/api/anna/register', data);

      const res = await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data.password,
        callbackUrl,
      });

      if (res?.error) {
        open({ severity: 'error', message: ERROR_LOGIN_MESSAGE });
        return;
      }

      const isNewUser = !user.data?.fullName;
      const haspaymentPlansId = user.data?.paymentPlansId;
      if (!isNewUser && haspaymentPlansId) {
        toggleSignIn();
      }
      setCurrentSignInStep(1);
      open({ severity: 'success', message: 'Bienvenido(a) a Anna!' });
    } catch (error) {}
  };

  return { signinHandler };
};
