import { useState } from 'react';
import { Button } from '../../../../../ui/Button';
import { Text } from '../../../../../ui/Text';
import { PlanDetails } from './PlanDetails';
import { PlanItem } from './PlanItem';
import { useSuscribe } from '../../../../../../hooks/useSuscribe';
import { useSession } from 'next-auth/react';
import { useSignInStore } from '../../../../../../store';
import { cronicalDisease } from '../../../../../../constants/care';

export const PaymentPlans = () => {
  const { signInData } = useSignInStore();
  const [planSelected, setPlanSelected] = useState(0);
  const { handleSuscribe } = useSuscribe();
  const { data } = useSession();
  const cronicalOptions = cronicalDisease.find(
    ({ id }) => (signInData?.cronicDesease || -1) == id
  );

  const name = cronicalOptions?.text;
  const plansSelected = cronicalOptions?.plans ?? [];
  const plansDetailsSelected = cronicalOptions?.details ?? [];

  return (
    <div className="flex flex-col justify-between gap-10 h-full">
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
          {plansSelected.map((plan, index) => (
            <PlanItem
              {...plan}
              isSelected={planSelected === index}
              onClick={() => setPlanSelected(index)}
            />
          ))}
        </div>
        <PlanDetails details={plansDetailsSelected} />
      </div>

      <div className="flex flex-col gap-3">
        <Button
          className="w-full"
          onClick={() =>
            data?.user?.email &&
            handleSuscribe(plansSelected[planSelected].price, data.user.email)
          }
        >
          Suscribirme
        </Button>
        <Text
          onClick={() => {}}
          text="Orientate con un asistente médico"
          level="base"
          className="text-center text-neutralStrong cursor-pointer"
        />
      </div>
    </div>
  );
};
