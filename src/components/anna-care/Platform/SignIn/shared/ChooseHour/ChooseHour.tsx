import { useStepsStore, useTreatmentStore } from '../../../../../../store';
import { Button } from '../../../../../ui/Button';
import { Text } from '../../../../../ui/Text';
import { Options } from '../Options/Options';

export const ChooseHour = () => {
  const { treatmentData, setTreatmentData } = useTreatmentStore();
  const { nextSignInStep } = useStepsStore();

  return (
    <div className="flex flex-col justify-between gap-10 h-full">
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
        <Options
          compareToId={treatmentData?.hour}
          setter={(id) => setTreatmentData({ hour: id })}
          options={[
            {
              text: 'Mañana',
              id: 1,
            },
            {
              text: 'Tarde',
              id: 2,
            },
            {
              text: 'Noche',
              id: 3,
            },
          ]}
        />
      </div>

      <Button className="w-full" onClick={() => nextSignInStep()}>
        Continuar
      </Button>
    </div>
  );
};
