import { useSignInStore } from '../../../../../../store';
import { Button } from '../../../../../ui/Button';
import { Text } from '../../../../../ui/Text';
import { Image } from '../../../../../ui/Image';
import { Options } from './Options';

export const ChooseCondition = () => {
  const { nextSignInStep } = useSignInStore();

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
        <Options />
      </div>

      <Button className="w-full" onClick={() => nextSignInStep()}>
        Continuar
      </Button>
    </div>
  );
};
