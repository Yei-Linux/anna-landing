import { getCsrfToken, useSession } from 'next-auth/react';
import { suscribe } from '../services';
import { useLandingBotStore, useSignInStore, useStepsStore } from '../store';

export const useSuscribe = () => {
  const { update, data } = useSession();
  const { toggleSignIn } = useSignInStore();
  const { setCurrentSignInStep } = useStepsStore();
  const handleSuscribe = async (carePlusPlanPrice: number, email: string) => {
    const success = await suscribe(carePlusPlanPrice, email);
    if (!success) return;

    await getCsrfToken();
    await update({
      ...data,
      user: {
        ...data?.user,
        carePlusPlanPrice,
      },
    });
    setCurrentSignInStep(1);
    toggleSignIn();
  };

  return { handleSuscribe };
};
