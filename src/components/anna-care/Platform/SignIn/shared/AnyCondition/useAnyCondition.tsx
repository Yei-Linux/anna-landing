import { useSession } from 'next-auth/react';
import {
  useLandingBotStore,
  useSignInStore,
  useStepsStore,
} from '../../../../../../store';
import { useRegisterUser } from '../../../../../../hooks/useRegisterUser';
import { useOptionsStore } from '../../../../../../store/options';

export const useAnyCondition = () => {
  const { flags } = useLandingBotStore();
  const signupEnabled = !!flags?.signup_controller?.enabled;

  const { data } = useSession();
  const { setSigninData, signInData } = useSignInStore();
  const { nextSignInStep } = useStepsStore();
  const { handlerUpsertInfo, isRegistering } = useRegisterUser();
  const { options } = useOptionsStore();
  const cronicDisease =
    options?.cronicalDiseases[options?.cronicalDiseases.length - 1].id;

  const handleAnyCondition = () => {
    setSigninData({
      hasAnyCronicDesease: false,
      cronicDesease: cronicDisease,
    });

    if (!signupEnabled) {
      nextSignInStep();
      return;
    }

    if (!signInData) return;
    if (!data?.user?.email) return;
    handlerUpsertInfo(
      {
        fullName: signInData.fullName,
        hasAnyCronicDesease: false,
        cronicalDiseasesId: cronicDisease,
        takeCareOptionsSelected: signInData.takeCareOptionsSelected,
      },
      data?.user?.email
    );
  };

  return { handleAnyCondition, isRegistering, nextSignInStep };
};
