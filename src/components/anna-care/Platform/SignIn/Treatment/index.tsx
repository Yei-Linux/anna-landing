import { Fragment } from 'react';
import { useStepsStore } from '../../../../../store';
import { KnowYou } from '../shared';
import { TakeCare } from '../shared/TakeCare';
import { ChooseDisease } from '../shared/ChooseDisease';
import { ChooseDay } from '../shared/ChooseDay/ChooseDay';
import { ChooseHour } from '../shared/ChooseHour/ChooseHour';
import { PaymentPlans } from '../shared/PaymentsPlans';
import { ConfirmationPayment } from '../shared/ConfirmationPayment';

export const Treatment = () => {
  const { currentSignInStep } = useStepsStore();

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
};
