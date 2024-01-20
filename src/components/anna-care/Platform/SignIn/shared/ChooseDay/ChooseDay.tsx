import { getWeekList } from '../../../../../../helpers';
import { useStepsStore, useTreatmentStore } from '../../../../../../store';
import { Button } from '../../../../../ui/Button';
import { Text } from '../../../../../ui/Text';
import { Options } from '../Options/Options';

export const ChooseDay = () => {
  const days = getWeekList();
  const { treatmentData, setTreatmentData } = useTreatmentStore();
  const { nextSignInStep } = useStepsStore();

  const handleChooseDay = () => {
    if (!treatmentData?.day) return;
    if (!treatmentData?.dayText) return;
    nextSignInStep();
  };

  return (
    <div className="flex flex-col md:justify-between gap-3 h-full">
      <div className="flex flex-col gap-2">
        <Text
          text="Selecciona el día"
          level="base"
          fontWeight="semibold"
          as="h3"
          className="text-primary text-center"
        />
        <Text
          text="Serás atendido por un especialista"
          level="base"
          as="p"
          className="text-center"
        />
      </div>

      <div className="flex justify-center items-center">
        <Options
          compareToId={treatmentData?.day}
          setter={(id, text) =>
            setTreatmentData({
              day: id,
              dayText: text,
            })
          }
          options={days}
        />
      </div>

      <Button className="w-full" onClick={handleChooseDay}>
        Continuar
      </Button>
    </div>
  );
};
