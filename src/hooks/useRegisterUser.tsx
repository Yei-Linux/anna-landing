import { useState } from 'react';
import { upsertUserInformation } from '../services';
import { useStepsStore } from '../store';
import { getCsrfToken, useSession } from 'next-auth/react';

export const useRegisterUser = () => {
  const { update, data } = useSession();
  const [isRegistering, setIsRegistering] = useState(false);
  const { setCurrentSignInStep } = useStepsStore();

  const handlerUpsertInfo = async (req: any, email: string) => {
    setIsRegistering(true);
    const success = await upsertUserInformation(req, email);
    if (!success) {
      setIsRegistering(false);
      return;
    }

    await getCsrfToken();
    await update({
      ...data,
      user: {
        ...data?.user,
        fullName: req?.fullName,
        carePlusPlanPrice: undefined,
      },
    });
    setCurrentSignInStep(1);
  };

  return { handlerUpsertInfo, isRegistering };
};
