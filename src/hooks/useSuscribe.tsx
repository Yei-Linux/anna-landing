import { getCsrfToken, useSession } from 'next-auth/react';
import { suscribe } from '../services';
import { useNotificationStore, useSignInStore, useStepsStore } from '../store';
import { ERROR_MESSAGE } from '../constants';

export const useSuscribe = () => {
  const { update, data } = useSession();
  const { toggleSignIn } = useSignInStore();
  const { setCurrentSignInStep } = useStepsStore();
  const { open } = useNotificationStore();
  const handleSuscribe = async (paymentPlansId: string, email: string) => {
    const success = await suscribe(paymentPlansId, email);
    if (!success) {
      open({
        severity: 'error',
        message: ERROR_MESSAGE,
      });
      return;
    }

    await getCsrfToken();
    await update({
      ...data,
      user: {
        ...data?.user,
        paymentPlansId,
      },
    });
    setCurrentSignInStep(1);
    toggleSignIn();
    open({
      message: 'Genial ya estas suscrito a Anna Care',
      severity: 'success',
    });
  };

  return { handleSuscribe };
};
