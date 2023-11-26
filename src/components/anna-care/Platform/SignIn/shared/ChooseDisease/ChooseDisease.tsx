import { useStepsStore, useTreatmentStore } from '../../../../../../store';
import { Button } from '../../../../../ui/Button';
import { Text } from '../../../../../ui/Text';
import { Options } from '../Options/Options';

export const ChooseDisease = () => {
  const { treatmentData, setTreatmentData } = useTreatmentStore();
  const { nextSignInStep } = useStepsStore();

  return (
    <div className="flex flex-col justify-between gap-10 h-full">
      <div className="flex flex-col gap-2">
        <Text
          text="Síntomas"
          level="base"
          fontWeight="semibold"
          as="h3"
          className="text-primary text-center"
        />
        <Text
          text="Porfavor, selecciona el síntoma que tienes"
          level="base"
          as="p"
          className="text-center"
        />
      </div>

      <div className="flex justify-center items-center">
        <Options
          compareToId={treatmentData?.disease}
          setter={(id) => setTreatmentData({ disease: id })}
          options={[
            {
              text: 'Dolor de cabeza',
              id: 1,
            },
            {
              text: 'Dolor de corazon',
              id: 2,
            },
            {
              text: 'Dolor de garganta',
              id: 3,
            },
            {
              text: 'Insuficiencia Respiratoria',
              id: 4,
            },
            {
              text: 'Presion Arterial',
              id: 5,
            },
            {
              text: 'Relacionado u otro',
              id: 6,
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
