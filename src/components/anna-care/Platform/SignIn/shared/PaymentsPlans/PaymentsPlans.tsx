import { Button } from '../../../../../ui/Button';
import { Text } from '../../../../../ui/Text';
import { PlanDetails } from './components/PlanDetails';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useLandingBotStore, useSignInStore } from '../../../../../../store';

import { useWaitList } from '../../../../../../hooks/useWaitlist';
import { usePlan } from './usePlan';
import { useRequestAnnaCare } from '../../../../../../hooks/useRequestAnnaCare';

export interface IPaymentPlans {}

export const PaymentPlans = ({}: IPaymentPlans) => {
  const { flags } = useLandingBotStore();
  const signupEnabled = !!flags?.signup_controller?.enabled;

  const { requestAnnaCare } = useRequestAnnaCare();
  const { joinWaitList } = useWaitList();

  const { signInData } = useSignInStore();
  const { data } = useSession();

  const { planSelected, name, plans, benefits, FLOWS, paymentPlanId, link } =
    usePlan({
      data,
      signInData,
      signupEnabled,
    });

  const handleJoinToWaitlist = async () => {
    if (!signInData) return;
    if (!planSelected) return;

    await joinWaitList({ ...signInData, paymentPlansId: planSelected });
  };

  const handleRequestSuscription = async () => {
    if (!planSelected) return;
    const email = data?.user?.email || signInData?.email;
    if (!email) return;

    await requestAnnaCare({
      email,
      paymentPlansId: planSelected,
    });
  };

  return (
    <div className="flex flex-col md:justify-between gap-4 h-full">
      <div className="flex flex-col justify-center gap-4">
        <div className="flex flex-col gap-2 mb-4">
          <Text
            text={`${
              signInData?.fullName ? signInData?.fullName + ' ' : ''
            }Tus doctores estarán contigo en:`}
            level="base"
            as="h3"
            className="text-left !text-[18px]"
          />
          <Text
            text={'Programa de ' + name}
            level="base"
            as="h3"
            className="text-left text-primary !text-[18px]"
          />
        </div>
        <div>
          {plans.map((plan) => (
            <>
              <div className="flex gap-4 items-center">
                <Text
                  text={plan.priceInfo}
                  level="xl"
                  fontWeight="semibold"
                  as="h1"
                />
                <span>
                  / {`por ${plan.type === 'Monthly' ? 'mes' : 'año'}`}
                </span>
              </div>
            </>
          ))}
        </div>
        <PlanDetails details={benefits} />
      </div>

      <div className="flex flex-col gap-3 px-3">
        {!signupEnabled && !data?.user && (
          <Button className="w-full" onClick={handleJoinToWaitlist}>
            {FLOWS.PAYMENT_PLAN_SIGNUP.button}
          </Button>
        )}
        {(signupEnabled || data?.user) && (
          <Button
            disabled={paymentPlanId && planSelected === paymentPlanId}
            className="w-full"
            onClick={handleRequestSuscription}
          >
            {paymentPlanId && planSelected === paymentPlanId
              ? 'Estas suscrito con esta opción'
              : 'Suscribirme con esta condición'}
          </Button>
        )}
        {signupEnabled && (
          <Link href={link}>
            <span className="text-center text-neutralStrong cursor-pointer m-auto">
              Oriéntate con un asistente médico
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};
