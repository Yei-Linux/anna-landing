import { useState } from 'react';
import { Button } from '../../../../../ui/Button';
import { Text } from '../../../../../ui/Text';
import { PlanDetails } from './PlanDetails';
import { PlanItem } from './PlanItem';

export const PaymentPlans = () => {
  const [planSelected, setPlanSelected] = useState(0);

  return (
    <div className="flex flex-col justify-between gap-10 h-full">
      <div className="flex flex-col gap-2">
        <Text
          text="Hipertension"
          level="base"
          fontWeight="semibold"
          as="h3"
          className="text-center"
        />
      </div>

      <div className="flex flex-col justify-center items-center">
        <div>
          <PlanItem
            title="Plan Anual"
            subTitle="1er Asesoría médica gratis"
            priceInfo="S/ 150 al mes (Facturados anualmente)"
            isPopular
            description="Esta membresía te ahorra S/300 soles cada año"
            isSelected={planSelected === 0}
            onClick={() => setPlanSelected(0)}
          />
          <PlanItem
            title="Plan Trimestral"
            subTitle="1er Asesoría médica gratis"
            priceInfo="S/ 250 al mes"
            isSelected={planSelected === 1}
            onClick={() => setPlanSelected(1)}
          />
        </div>
        <PlanDetails />
      </div>

      <div className="flex flex-col gap-3">
        <Button className="w-full" onClick={() => {}}>
          Solicita tu asesoría gratuita
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
