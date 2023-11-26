import { Fragment } from 'react';
import { useSignInStore } from '../../../../../store';
import { KnowYou } from '../shared';
import { AnyCondition } from '../shared/AnyCondition/AnyCondition';
import { ChooseCondition } from '../shared/ChooseCondition';
import { TakeCare } from '../shared/TakeCare';
import { Kit } from '../shared/Kit/Kit';
import { Benefits } from '../shared/Benefits';
import { PaymentInformation } from '../shared/PaymementInformation';

export const CarePlus = () => {
  const { currentSignInStep } = useSignInStore();

  return (
    <Fragment>
      {currentSignInStep === 1 && <KnowYou />}
      {currentSignInStep === 2 && <AnyCondition />}
      {currentSignInStep === 3 && <ChooseCondition />}
      {currentSignInStep === 4 && <TakeCare />}
      {currentSignInStep === 5 && <Kit />}
      {currentSignInStep === 6 && <Benefits />}
      {currentSignInStep === 7 && <PaymentInformation />}
      {currentSignInStep === 8 && <ChooseCondition />}
    </Fragment>
  );
};
