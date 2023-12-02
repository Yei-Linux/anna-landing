import { useState } from 'react';
import { Button } from '../../../../../ui/Button';
import { Text } from '../../../../../ui/Text';
import { PlanDetails } from './PlanDetails';
import { PlanItem } from './PlanItem';
import { useSuscribe } from '../../../../../../hooks/useSuscribe';
import { useSession } from 'next-auth/react';
import { useSignInStore } from '../../../../../../store';
import { getBotUrlSender } from '../../../../../../helpers';
import { PHONE_NUMBER } from '../../../../../../constants';
import Link from 'next/link';
import { useOptionsStore } from '../../../../../../store/options';
import { cronicalDiseaseSeeders } from '../../../../../../../prisma/seeders/options';

export const PaymentPlans = () => {
  const [planSelected, setPlanSelected] = useState(0);
  const { handleSuscribe } = useSuscribe();
  const { data } = useSession();
  const { options } = useOptionsStore();
  const cronicalOptions = options?.cronicalDiseases.find(
    ({ id }) =>
      ((data?.user as any)?.cronicalDiseasesId ||
        cronicalDiseaseSeeders[cronicalDiseaseSeeders.length - 1].id) == id
  );

  if (!cronicalOptions) return null;

  const name = cronicalOptions?.text;
  const plansSelected = cronicalOptions.paymentPlan ?? [];
  const plansDetailsSelected = [
    {
      title: 'Trata tu dolor',
    },
    {
      title: 'Selecciona tu horario y listo',
    },
    {
      title: 'Hazte seguimiento y ahorra',
    },
  ];

  const message =
    'Hola, quiero orientacion con respecto a la suscripción de Anna Care';
  const link = getBotUrlSender(PHONE_NUMBER, message);

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
              title={`Plan ${plan.type === 'Monthly' ? 'Mensual' : 'Anual'}`}
              subTitle={plan.subtitle}
              priceInfo={plan.priceInfo}
              description={plan.description}
              isPopular={plan.isPopular}
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
            handleSuscribe(plansSelected[planSelected].id, data.user.email)
          }
        >
          Suscribirme
        </Button>
        <Link href={link}>
          <Text
            text="Orientate con un asistente médico"
            level="base"
            className="text-center text-neutralStrong cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
};
