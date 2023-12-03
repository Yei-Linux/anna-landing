import { useStepsStore, useTreatmentStore } from '../../../../../../store';
import { useOptionsStore } from '../../../../../../store/options';
import { Button } from '../../../../../ui/Button';
import { Text } from '../../../../../ui/Text';
import { Options } from '../Options/Options';

export const ChooseDisease = () => {
  const { treatmentData, setTreatmentData } = useTreatmentStore();
  const { nextSignInStep } = useStepsStore();
  const { options } = useOptionsStore();

  return (
    <div className="flex flex-col md:justify-between gap-10 h-full">
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
        {options?.diseases && (
          <Options
            compareToId={treatmentData?.disease}
            setter={(id, text) =>
              setTreatmentData({ disease: id, diseaseText: text })
            }
            options={options?.diseases}
          />
        )}
      </div>

      <Button
        className="w-full"
        onClick={() => {
          if (!treatmentData?.disease) return;
          if (!treatmentData?.diseaseText) return;
          nextSignInStep();
        }}
      >
        Continuar
      </Button>
    </div>
  );
};
