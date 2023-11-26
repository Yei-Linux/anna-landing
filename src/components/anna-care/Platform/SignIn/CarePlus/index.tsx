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

export const CarePlus = () => {
  const { currentSignInStep } = useStepsStore();
  const { signInData } = useSignInStore();
  const hasAnyCronicDesease = signInData?.hasAnyCronicDesease;

  const withCronic = () => (
    <Fragment>
      {currentSignInStep === 4 && <ChooseCondition />}
      {currentSignInStep === 5 && <Kit />}
      {currentSignInStep === 6 && (
        <Benefits>
          <BenefisActionsForCronic />
        </Benefits>
      )}
      {currentSignInStep === 7 && <ChooseCondition />}
      {currentSignInStep === 8 && <PaymentPlans />}
    </Fragment>
  );

  const withoutCronic = () => (
    <Fragment>
      {currentSignInStep === 4 && <Kit />}
      {currentSignInStep === 5 && (
        <Benefits>
          <BenefisActionsForNotCronic />
        </Benefits>
      )}
      {currentSignInStep === 6 && <PaymentPlans />}
    </Fragment>
  );

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
