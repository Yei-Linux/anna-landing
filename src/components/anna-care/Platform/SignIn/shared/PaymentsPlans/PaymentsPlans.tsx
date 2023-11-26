import { Button } from '../../../../../ui/Button';
import { Text } from '../../../../../ui/Text';
import { PlanDetails } from './PlanDetails';
import { PlanItem } from './PlanItem';

export const PaymentPlans = () => {
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

      <div className="flex justify-center items-center">
        <div>
          <PlanItem />
          <PlanItem />
        </div>
        <div>
          <PlanDetails />
        </div>
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
