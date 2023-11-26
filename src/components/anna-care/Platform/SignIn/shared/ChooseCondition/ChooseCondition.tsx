import { useSignInStore, useStepsStore } from '../../../../../../store';
import { Button } from '../../../../../ui/Button';
import { Text } from '../../../../../ui/Text';
import { Options } from '../Options/Options';

export const ChooseCondition = () => {
  const { signInData, setSigninData } = useSignInStore();
  const { nextSignInStep } = useStepsStore();

  return (
    <div className="flex flex-col justify-between gap-10 h-full">
      <div className="flex flex-col gap-2">
        <Text
          text="Condición"
          level="base"
          fontWeight="semibold"
          as="h3"
          className="text-primary text-center"
        />
        <Text
          text="Porfavor, selecciona la situación crónica la cual llevas seguimiento"
          level="base"
          as="p"
          className="text-center"
        />
      </div>

      <div className="flex justify-center items-center">
        <Options
          compareToId={signInData?.cronicDesease}
          setter={(id) => setSigninData({ cronicDesease: id })}
          options={[
            {
              text: 'Diabetes',
              id: 1,
            },
            {
              text: 'Hipertensión',
              id: 2,
            },
            {
              text: 'Enfermedades respiratorias',
              id: 3,
            },
            {
              text: 'Obesidad',
              id: 4,
            },
            {
              text: 'Dislipidemia',
              id: 5,
            },
            {
              text: 'Tiroides',
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
