import { Fragment } from 'react';
import { useSignInStore, useStepsStore } from '../../../../../store';
import { KnowYou } from '../shared';
import { AnyCondition } from '../shared/AnyCondition/AnyCondition';
import { ChooseCondition } from '../shared/ChooseCondition';
import { TakeCare } from '../shared/TakeCare';
import { Kit } from '../shared/Kit/Kit';
import {
  BenefisActionsForCronic,
  BenefisActionsForNotCronic,
  Benefits,
} from '../shared/Benefits';
import { PaymentPlans } from '../shared/PaymentsPlans';
import { useSession } from 'next-auth/react';

export const CarePlus = () => {
  const { status, data } = useSession();
  const { currentSignInStep } = useStepsStore();
  const { signInData } = useSignInStore();
  const hasAnyCronicDesease = signInData?.hasAnyCronicDesease;

  const withCronic = (initStep: number = 4) => (
    <Fragment>
      {currentSignInStep === initStep && <ChooseCondition />}
      {currentSignInStep === initStep + 1 && <Kit />}
      {currentSignInStep === initStep + 2 && (
        <Benefits>
          <BenefisActionsForCronic />
        </Benefits>
      )}
      {currentSignInStep === initStep + 3 && <ChooseCondition />}
      {currentSignInStep === initStep + 4 && <PaymentPlans />}
    </Fragment>
  );

  const withoutCronic = (initStep: number = 4) => (
    <Fragment>
      {currentSignInStep === initStep && <Kit />}
      {currentSignInStep === initStep + 1 && (
        <Benefits>
          <BenefisActionsForNotCronic />
        </Benefits>
      )}
      {currentSignInStep === initStep + 2 && <PaymentPlans />}
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
        {currentSignInStep === 2 && <AnyCondition />}

        {hasAnyCronicDesease === true && withCronic(3)}
        {hasAnyCronicDesease === false && withoutCronic(3)}
      </Fragment>
    );
  }

  if (status === 'authenticated' && !isNewUser && !haspaymentPlansId) {
    return (
      <Fragment>
        {currentSignInStep === 1 && <ChooseCondition />}
        {currentSignInStep === 2 && <PaymentPlans />}
      </Fragment>
    );
  }

  if (status === 'authenticated' && !isNewUser && haspaymentPlansId) {
    return <Fragment></Fragment>;
  }

  return (
    <Fragment>
      {currentSignInStep === 1 && <TakeCare />}
      {currentSignInStep === 2 && <KnowYou />}
      {currentSignInStep === 3 && <AnyCondition />}

      {hasAnyCronicDesease === true && withCronic()}
      {hasAnyCronicDesease === false && withoutCronic()}
    </Fragment>
  );
};
