import { Fragment } from 'react';
import { useStepsStore } from '../../../../../store';
import { KnowYou } from '../shared';
import { TakeCare } from '../shared/TakeCare';
import { ChooseDisease } from '../shared/ChooseDisease';
import { ChooseDay } from '../shared/ChooseDay/ChooseDay';
import { ChooseHour } from '../shared/ChooseHour/ChooseHour';
import { ConfirmationPayment } from '../shared/ConfirmationPayment';
import { useSession } from 'next-auth/react';

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
        {currentSignInStep === 1 && <TakeCare />}
        {currentSignInStep === 2 && <KnowYou />}
        {currentSignInStep === 3 && <ChooseDisease />}
        {currentSignInStep === 4 && <ChooseDay />}
        {currentSignInStep === 5 && <ChooseHour />}
        {currentSignInStep === 6 && <ConfirmationPayment />}
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
      {currentSignInStep === 2 && <ChooseDisease />}
      {currentSignInStep === 3 && <ChooseDay />}
      {currentSignInStep === 4 && <ChooseHour />}
      {currentSignInStep === 5 && <ConfirmationPayment />}
    </Fragment>
  );
};
