import { useState } from 'react';
import { upsertUserInformation } from '../services';
import { useNotificationStore, useSignInStore, useStepsStore } from '../store';
import { getCsrfToken, useSession } from 'next-auth/react';
import { ERROR_MESSAGE } from '../constants';

export const useRegisterUser = () => {
  const { update, data } = useSession();
  const [isRegistering, setIsRegistering] = useState(false);
  const { setCurrentSignInStep } = useStepsStore();
  const { open } = useNotificationStore();
  const { signInData } = useSignInStore();

  const handlerUpsertInfo = async (req: any, email: string) => {
    const newUser = !(data?.user as any)?.fullName;
    const cronicalDiseasesId = (data?.user as any)?.cronicalDiseasesId;
    if (
      !newUser &&
      ((cronicalDiseasesId && !signInData?.cronicDesease) ||
        signInData?.cronicDesease === cronicalDiseasesId)
    ) {
      setCurrentSignInStep(2);
      return;
    }

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
    setCurrentSignInStep(2);
    setIsRegistering(true);
    open({
      message: 'Genial acabas de actualizar tu información!',
      severity: 'success',
    });
  };

  return { handlerUpsertInfo, isRegistering };
};
