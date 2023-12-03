import { useStepsStore, useTreatmentStore } from '../../../../../../store';
import { useOptionsStore } from '../../../../../../store/options';
import { Button } from '../../../../../ui/Button';
import { Text } from '../../../../../ui/Text';
import { Options } from '../Options/Options';

export const ChooseHour = () => {
  const { treatmentData, setTreatmentData } = useTreatmentStore();
  const { nextSignInStep } = useStepsStore();
  const { options } = useOptionsStore();

  return (
    <div className="flex flex-col md:justify-between gap-7 h-full">
      <div className="flex flex-col gap-2">
        <Text
          text="Selecciona el horario"
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
        {options?.turns && (
          <Options
            compareToId={treatmentData?.hour}
            setter={(id, text) =>
              setTreatmentData({ hour: id, hourText: text })
            }
            options={options?.turns}
          />
        )}
      </div>

      <Button className="w-full" onClick={() => nextSignInStep()}>
        Continuar
      </Button>
    </div>
  );
};
