import { Fragment } from 'react';
import { useSignInStore, useStepsStore } from '../../../../../store';
import { KnowYou } from '../shared';
import { AnyCondition } from '../shared/AnyCondition/AnyCondition';
import { ChooseCondition } from '../shared/ChooseCondition';
import { PaymentPlans } from '../shared/PaymentsPlans';
import { useSession } from 'next-auth/react';
import { TakeCareSteps } from '../shared/TakeCare';
import { TakeCareOptions } from '../shared/TakeCareOptions';
import { WaitlistMessage } from '../shared/WaitlistMessage/WaitlistMessage';

/**
 * Drawer Component rendered when user either wants to sign in(when has an account) or signup
 *
 * @return {JSX.Element}
 */
export const CarePlus = () => {
  const { status, data } = useSession();
  const { currentSignInStep } = useStepsStore();
  const { signInData } = useSignInStore();
  const hasAnyCronicDesease = signInData?.hasAnyCronicDesease;

  const withCronic = (initStep: number = 5) => (
    <Fragment>
      {currentSignInStep === initStep && <ChooseCondition />}
      {currentSignInStep === initStep + 1 && <PaymentPlans />}
      {currentSignInStep === initStep + 2 && <WaitlistMessage />}
    </Fragment>
  );

  const withoutCronic = (initStep: number = 5) => (
    <Fragment>
      {currentSignInStep === initStep && <PaymentPlans />}
      {currentSignInStep === initStep + 1 && <WaitlistMessage />}
    </Fragment>
  );

  if (status === 'loading') {
    return 'Loading...';
  }

  const isNewUser = !(data?.user as any)?.fullName;
  const haspaymentPlansId = (data?.user as any)?.paymentPlansId;
  if (status === 'authenticated' && isNewUser) {
    return (
      <Fragment>
        {currentSignInStep === 1 && <KnowYou />}
        {currentSignInStep === 2 && <TakeCareOptions />}
        {currentSignInStep === 3 && <AnyCondition />}

        {hasAnyCronicDesease === true && withCronic(4)}
        {hasAnyCronicDesease === false && withoutCronic(4)}
      </Fragment>
    );
  }

  if (status === 'authenticated' && !isNewUser && !haspaymentPlansId) {
    return (
      <Fragment>
        {currentSignInStep === 1 && <ChooseCondition />}
        {currentSignInStep === 2 && <PaymentPlans />}
        {currentSignInStep === 3 && <WaitlistMessage />}
      </Fragment>
    );
  }

  if (status === 'authenticated' && !isNewUser && haspaymentPlansId) {
    return <Fragment></Fragment>;
  }

  return (
    <Fragment>
      {currentSignInStep === 1 && <TakeCareSteps />}
      {currentSignInStep === 2 && <KnowYou />}
      {currentSignInStep === 3 && <TakeCareOptions />}
      {currentSignInStep === 4 && <AnyCondition />}

      {hasAnyCronicDesease === true && withCronic()}
      {hasAnyCronicDesease === false && withoutCronic()}
    </Fragment>
  );
};
