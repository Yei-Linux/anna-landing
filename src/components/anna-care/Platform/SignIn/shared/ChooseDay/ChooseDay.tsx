import { useStepsStore, useTreatmentStore } from '../../../../../../store';
import { Button } from '../../../../../ui/Button';
import { Text } from '../../../../../ui/Text';
import { Options } from '../Options/Options';

export const ChooseDay = () => {
  const { treatmentData, setTreatmentData } = useTreatmentStore();
  const { nextSignInStep } = useStepsStore();

  return (
    <div className="flex flex-col justify-between gap-10 h-full">
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
          setter={(id) => setTreatmentData({ day: id })}
          options={[
            {
              text: 'Lunes',
              id: 1,
            },
            {
              text: 'Martes',
              id: 2,
            },
            {
              text: 'Miércoles',
              id: 3,
            },
            {
              text: 'Jueves',
              id: 4,
            },
            {
              text: 'Viernes',
              id: 5,
            },
            {
              text: 'Sábado',
              id: 6,
            },
            {
              text: 'Domingo',
              id: 7,
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
