import { useEffect, useState } from 'react';
import { Button } from '../../../../../ui/Button';
import { Text } from '../../../../../ui/Text';
import { PlanDetails } from './PlanDetails';
import { PlanItem } from './PlanItem';
import { useSuscribe } from '../../../../../../hooks/useSuscribe';
import { useSession } from 'next-auth/react';
import { getBotUrlSender, getSuscribeMessage } from '../../../../../../helpers';
import { PHONE_NUMBER } from '../../../../../../constants';
import Link from 'next/link';
import { useOptionsStore } from '../../../../../../store/options';
import { benefitsDetails } from '../../../../../../constants/befenits';
import { useRegisterUser } from '../../../../../../hooks/useRegisterUser';
import { useLandingBotStore, useSignInStore } from '../../../../../../store';
import { useRouter } from 'next/router';
import { messages } from '../../../../../../constants/messages';
import { useWaitList } from '../../../../../../hooks/useWaitlist';

const disableDirectSuscription = true;

export interface IPaymentPlans {
  isDisableUpsertRegister?: boolean;
}

export const PaymentPlans = ({
  isDisableUpsertRegister = true,
}: IPaymentPlans) => {
  const { flags } = useLandingBotStore();
  const signupEnabled = !!flags?.signup_controller?.enabled;

  const { joinWaitList } = useWaitList();
  const [planSelected, setPlanSelected] = useState<string | null>(null);
  const { push } = useRouter();
  const { signInData } = useSignInStore();
  const { handleSuscribe } = useSuscribe();
  const { handlerUpsertInfo } = useRegisterUser();
  const { data } = useSession();
  const { options } = useOptionsStore();
  const paymentPlansId = (data?.user as any)?.paymentPlansId;
  const cronicalOptions = options?.cronicalDiseases.find(
    ({ id }) =>
      ((!isDisableUpsertRegister && signInData?.cronicDesease) ||
        (data?.user as any)?.cronicalDiseasesId ||
        options?.cronicalDiseases[options?.cronicalDiseases.length - 1].id) ==
      id
  );

  useEffect(() => {
    if (!cronicalOptions) return;
    const defaultValue =
      cronicalOptions?.paymentPlan.find(({ id }) => id === paymentPlansId)
        ?.id || cronicalOptions?.paymentPlan?.[0]?.id;

    setPlanSelected(defaultValue);
  }, [cronicalOptions]);

  const name = cronicalOptions?.text;
  const plansSelected = cronicalOptions?.paymentPlan ?? [];
  const benefitsSelected = cronicalOptions?.id
    ? benefitsDetails[cronicalOptions?.id]
    : [];

  const detailsPlanSelected = plansSelected.find(
    ({ id }) => planSelected == id
  );
  const messageToSuscribe = detailsPlanSelected
    ? getSuscribeMessage({
        type: `Plan ${
          detailsPlanSelected.type === 'Monthly' ? 'Mensual' : 'Anual'
        }`,
        cronicDiseaseText: name ?? '',
      })
    : '';
  const message =
    'Hola, quiero orientacion con respecto a la suscripción de Anna Care';
  const link = getBotUrlSender(PHONE_NUMBER, message);
  const linkToSuscribe = getBotUrlSender(PHONE_NUMBER, messageToSuscribe);
  const FLOWS = messages(signupEnabled);

  const handleJoinToWaitlist = async () => {
    if (!signInData) return;

    await joinWaitList(signInData);
  };

  const handleRequestSuscription = async () => {
    if (disableDirectSuscription) {
      push(linkToSuscribe);
      return;
    }

    if (!data?.user?.email) return;
    if (!planSelected) return;
    if (!isDisableUpsertRegister) {
      await handlerUpsertInfo(
        {
          cronicalDiseasesId: signInData?.cronicDesease,
        },
        data?.user?.email
      );
    }
    await handleSuscribe(planSelected, data.user.email);
  };

  return (
    <div className="flex flex-col md:justify-between gap-3 h-full">
      <div className="flex flex-col gap-2">
        <Text
          text={name}
          level="base"
          fontWeight="semibold"
          as="h3"
          className="text-center"
        />
      </div>

      <div className="flex flex-col justify-center items-center">
        <div>
          {plansSelected.map((plan) => (
            <PlanItem
              key={plan.id}
              title={`Plan ${plan.type === 'Monthly' ? 'Mensual' : 'Anual'}`}
              subTitle={plan.subtitle}
              priceInfo={plan.priceInfo}
              description={plan.description}
              isPopular={plan.isPopular}
              isSelected={planSelected === plan.id}
              onClick={() => setPlanSelected(plan.id)}
            />
          ))}
        </div>
        <PlanDetails details={benefitsSelected} />
      </div>

      <div className="flex flex-col gap-3 px-3">
        {!signupEnabled && (
          <Button className="w-full" onClick={handleJoinToWaitlist}>
            {FLOWS.PAYMENT_PLAN_SIGNUP.button}
          </Button>
        )}
        {signupEnabled && (
          <Button
            disabled={paymentPlansId && planSelected === paymentPlansId}
            className="w-full"
            onClick={handleRequestSuscription}
          >
            {paymentPlansId && planSelected === paymentPlansId
              ? 'Estas suscrito con esta opción'
              : FLOWS.PAYMENT_PLAN_SIGNUP.button}
          </Button>
        )}
        {signupEnabled && (
          <Link href={link}>
            <span className="text-center text-neutralStrong cursor-pointer m-auto">
              Orientate con un asistente médico
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};
