import { Fragment } from 'react';
import { useStepsStore } from '../../../../../store';

import { ChooseCondition } from '../shared/ChooseCondition';
import { PaymentPlans } from '../shared/PaymentsPlans';
import { useSession } from 'next-auth/react';

export const ChangeCondition = () => {
  const { status, data } = useSession();
  const { currentSignInStep } = useStepsStore();

  if (status === 'loading') {
    return 'Loading...';
  }

  const isNewUser = !(data?.user as any)?.fullName;

  if (status === 'unauthenticated') {
    return null;
  }

  if (status === 'authenticated' && isNewUser) {
    return null;
  }

  return (
    <Fragment>
      {currentSignInStep === 1 && <ChooseCondition isDisableUpsertRegister />}
      {currentSignInStep === 2 && (
        <PaymentPlans isDisableUpsertRegister={false} />
      )}
    </Fragment>
  );
};
