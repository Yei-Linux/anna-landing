import { Text } from '../../../../../ui/Text';
import { Image } from '../../../../../ui/Image';
import { Button } from '../../../../../ui/Button';
import { useSignInStore } from '../../../../../../store';

export const PaymentInformation = () => {
  const { nextSignInStep } = useSignInStore();

  return (
    <div className="flex flex-col h-full justify-between gap-10">
      <div className="flex flex-col gap-2">
        <Text text="Diabetes Melitus" level="base" />
        <div className="flex items-center gap-3">
          <Text text="S/ 500" level="2xl" fontWeight="bold" as="h1" />
          <Text text="/ mes" level="lg" fontWeight="bold" />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Button
          className="w-full"
          onClick={() => {
            nextSignInStep();
          }}
        >
          Quiero asesoría gratuita
        </Button>
        <Text
          onClick={() => {
            nextSignInStep();
          }}
          text="cambiar condición"
          level="base"
          className="text-center text-neutralStrong cursor-pointer"
        />
      </div>
    </div>
  );
};
