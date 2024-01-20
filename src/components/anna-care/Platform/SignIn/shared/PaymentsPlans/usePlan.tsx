import { useEffect, useState } from 'react';
import { useOptionsStore } from '../../../../../../store/options';
import { Session } from 'next-auth';
import { TSignInData } from '../../../../../../store';
import { TCronicalDisease } from '../../../../../../../back/services/options';
import { benefitsDetails } from '../../../../../../constants/befenits';
import { getBotUrlSender, getSuscribeMessage } from '../../../../../../helpers';
import { messages } from '../../../../../../constants/messages';
import { PHONE_NUMBER } from '../../../../../../constants';

const getCurrentUserPaymentSuscribed = (
  cronicalOptionProp: TCronicalDisease,
  paymentPlanId: string
) => cronicalOptionProp.paymentPlan.find(({ id }) => id === paymentPlanId)?.id;

const getFirstItemOfPaymentPlanFromCronicalDesease = (
  cronicalOptionProp: TCronicalDisease
) => cronicalOptionProp.paymentPlan?.[0]?.id;

interface IUsePlan {
  isFromCarePlus?: boolean;
  data: Session | null;
  signInData?: TSignInData;
  signupEnabled: boolean;
}

export const usePlan = ({ data, signInData, signupEnabled }: IUsePlan) => {
  const [planSelected, setPlanSelected] = useState<string | null>(null);
  const { options } = useOptionsStore();

  const paymentPlanId = (data?.user as any)?.paymentPlansId;
  const cronicalDiseaseId = (data?.user as any)?.cronicalDiseasesId;
  const cronicDiseaseFromStore = signInData?.cronicDesease;

  const cronicalOption = options?.cronicalDiseases.find(
    ({ id }) => (cronicDiseaseFromStore || cronicalDiseaseId) == id
  );

  const getMetadata = () => {
    const name = cronicalOption?.text;
    const plans = cronicalOption?.paymentPlan ?? [];
    const benefits = cronicalOption?.id
      ? benefitsDetails[cronicalOption?.id]
      : [];

    const planDetailsSelected = plans.find(({ id }) => planSelected == id);
    const messageToSuscribe = planDetailsSelected
      ? getSuscribeMessage({
          type: `Plan ${
            planDetailsSelected.type === 'Monthly' ? 'Mensual' : 'Anual'
          }`,
          cronicDiseaseText: name ?? '',
        })
      : '';

    const message =
      'Hola, quiero orientacion con respecto a la suscripción de Anna Care';
    const link = getBotUrlSender(PHONE_NUMBER, message);
    const linkToSuscribe = getBotUrlSender(PHONE_NUMBER, messageToSuscribe);
    const FLOWS = messages(signupEnabled);

    return { name, plans, benefits, message, link, linkToSuscribe, FLOWS };
  };
  const metadata = getMetadata();

  useEffect(() => {
    if (!cronicalOption) return;

    const defaultPlan =
      getCurrentUserPaymentSuscribed(cronicalOption, paymentPlanId) ||
      getFirstItemOfPaymentPlanFromCronicalDesease(cronicalOption);

    setPlanSelected(defaultPlan);
  }, [cronicalOption]);

  return { planSelected, options, paymentPlanId, ...metadata };
};
