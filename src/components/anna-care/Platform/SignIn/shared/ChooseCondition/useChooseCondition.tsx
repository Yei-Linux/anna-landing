import { useSession } from 'next-auth/react';
import {
  useLandingBotStore,
  useSignInStore,
  useStepsStore,
} from '../../../../../../store';
import { useRegisterUser } from '../../../../../../hooks/useRegisterUser';

export const useChooseCondition = () => {
  const { data } = useSession();
  const { signInData } = useSignInStore();
  const { flags } = useLandingBotStore();
  const signupEnabled = !!flags?.signup_controller?.enabled;
  const { setCurrentSignInStep, nextSignInStep } = useStepsStore();
  const { handlerUpsertInfo, isRegistering } = useRegisterUser();
  const cronicalDiseasesId = (data?.user as any)?.cronicalDiseasesId;

  const handleChoose = (isFromCarePlus: boolean) => {
    if (!signupEnabled) {
      nextSignInStep();
      return;
    }

    if (!cronicalDiseasesId && !signInData) return;
    if (!cronicalDiseasesId && !signInData?.cronicDesease) return;
    if (!data?.user?.email) return;

    if (!isFromCarePlus) {
      setCurrentSignInStep(2);
      return;
    }

    handlerUpsertInfo(
      {
        fullName: signInData?.fullName,
        hasAnyCronicDesease: signInData?.hasAnyCronicDesease,
        cronicalDiseasesId: signInData?.cronicDesease,
        takeCareOptionsSelected: signInData?.takeCareOptionsSelected,
      },
      data?.user?.email
    );
  };

  return { handleChoose, isRegistering, cronicalDiseasesId };
};
