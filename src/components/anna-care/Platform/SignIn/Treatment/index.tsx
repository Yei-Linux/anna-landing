import { Fragment } from 'react';
import { useStepsStore } from '../../../../../store';
import { KnowYou } from '../shared';
import { ChooseDisease } from '../shared/ChooseDisease';
import { ChooseDay } from '../shared/ChooseDay/ChooseDay';
import { ChooseHour } from '../shared/ChooseHour/ChooseHour';
import { ConfirmationPayment } from '../shared/ConfirmationPayment';
import { useSession } from 'next-auth/react';
import { AnyCondition } from '../shared/AnyCondition';
import { ChooseCondition } from '../shared/ChooseCondition';
import { TakeCareSteps } from '../shared/TakeCare';

/**
 * Drawer Component rendered when user either wants to book a medical appointment
 *
 * @return {JSX.Element}
 */
export const Treatment = () => {
  const { status, data } = useSession();
  const { currentSignInStep } = useStepsStore();
  const isNewUser = !(data?.user as any)?.fullName;

  if (status === 'loading') {
    return 'Loading...';
  }

  if (status === 'unauthenticated') {
    return (
      <Fragment>
        {currentSignInStep === 1 && <TakeCareSteps />}
        {currentSignInStep === 2 && <KnowYou />}
        {currentSignInStep === 3 && <AnyCondition />}
        {currentSignInStep === 4 && <ChooseCondition />}
        {currentSignInStep === 5 && <ChooseDisease />}
        {currentSignInStep === 6 && <ChooseDay />}
        {currentSignInStep === 7 && <ChooseHour />}
        {currentSignInStep === 8 && <ConfirmationPayment />}
      </Fragment>
    );
  }

  if (status === 'authenticated' && !isNewUser) {
    return (
      <Fragment>
        {currentSignInStep === 1 && <ChooseDisease />}
        {currentSignInStep === 2 && <ChooseDay />}
        {currentSignInStep === 3 && <ChooseHour />}
        {currentSignInStep === 4 && <ConfirmationPayment />}
      </Fragment>
    );
  }

  return (
    <Fragment>
      {currentSignInStep === 1 && <KnowYou />}
      {currentSignInStep === 2 && <AnyCondition />}
      {currentSignInStep === 3 && <ChooseCondition />}
      {currentSignInStep === 4 && <ChooseDisease />}
      {currentSignInStep === 5 && <ChooseDay />}
      {currentSignInStep === 6 && <ChooseHour />}
      {currentSignInStep === 7 && <ConfirmationPayment />}
    </Fragment>
  );
};
