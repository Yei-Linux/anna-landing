import { signIn, useSession } from 'next-auth/react';
import { useNotificationStore, useSignInStore, useStepsStore } from '../store';
import { TSignInForm } from '../types/sign-in';
import axios from 'axios';

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
        open({ severity: 'error', message: 'Credenciales incorrectas' });
        return;
      }

      const isNewUser = !user.data?.fullName;
      const hasCarePlusPlanPrice = user.data?.carePlusPlanPrice;
      if (!isNewUser && hasCarePlusPlanPrice) {
        open({ severity: 'success', message: 'Bienvenido(a)!' });
        toggleSignIn();
      }
      setCurrentSignInStep(1);
    } catch (error) {}
  };

  return { signinHandler };
};
