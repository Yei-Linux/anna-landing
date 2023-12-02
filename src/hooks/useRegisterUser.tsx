import { useState } from 'react';
import { upsertUserInformation } from '../services';
import { useNotificationStore, useStepsStore } from '../store';
import { getCsrfToken, useSession } from 'next-auth/react';
import { ERROR_MESSAGE } from '../constants';

export const useRegisterUser = () => {
  const { update, data } = useSession();
  const [isRegistering, setIsRegistering] = useState(false);
  const { setCurrentSignInStep } = useStepsStore();
  const { open } = useNotificationStore();

  const handlerUpsertInfo = async (req: any, email: string) => {
    setIsRegistering(true);
    const success = await upsertUserInformation(req, email);
    if (!success) {
      setIsRegistering(false);
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
        fullName: req?.fullName,
        cronicalDiseasesId: req?.cronicalDiseasesId,
        paymentPlansId: undefined,
      },
    });
    setCurrentSignInStep(1);
    setIsRegistering(true);
    open({
      message: 'Genial acabas de completar tu registro!',
      severity: 'success',
    });
  };

  return { handlerUpsertInfo, isRegistering };
};
