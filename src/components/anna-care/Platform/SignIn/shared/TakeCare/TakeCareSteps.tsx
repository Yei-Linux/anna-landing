import { Fragment, useEffect, useRef, useState } from 'react';
import { TakeCare } from './TakeCare';
import { GiveMeYourPassword } from './GiveMeYourPassword';
import {
  useLandingBotStore,
  useSignInStore,
  useStepsStore,
} from '../../../../../../store';
import { YouAreNotApprovedYet } from './YouAreNotApprovedYet';
import axios from 'axios';

type TUser = {
  email: string;
  approved: boolean;
};

export const TakeCareSteps = () => {
  const [user, setUser] = useState<TUser | null>(null);
  const [step, setStep] = useState(1);

  const { signInData } = useSignInStore();
  const { nextSignInStep } = useStepsStore();
  const { flags } = useLandingBotStore();
  const signupEnabled = !!flags?.signup_controller?.enabled;

  const nextStep = () => setStep((prev) => prev + 1);

  const reset = () => setStep(1);

  if (signupEnabled) {
    return <TakeCare />;
  }

  const validateUserFromWaitList = async () => {
    try {
      const { data: userResponse } = await axios.post(
        '/api/anna/is-user-approved',
        {
          email: signInData?.email,
        }
      );

      if (!userResponse?.data) {
        nextSignInStep();
        return;
      }

      setUser(userResponse?.data);
      nextStep();
    } catch (error) {}
  };

  useEffect(() => {
    if (!signInData?.email) {
      reset();
      return;
    }

    validateUserFromWaitList();
  }, [signInData?.email]);

  return (
    <Fragment>
      {step === 1 && <TakeCare />}
      {step === 2 &&
        (user?.approved ? (
          <GiveMeYourPassword onContinue={reset} />
        ) : (
          <YouAreNotApprovedYet onContinue={reset} />
        ))}
    </Fragment>
  );
};
