import { Text } from '../../../../../ui/Text';
import { Image } from '../../../../../ui/Image';
import { Button } from '../../../../../ui/Button';
import { useSignInStore } from '../../../../../../store';

export const Benefits = () => {
  const { nextSignInStep } = useSignInStore();

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <Text
          text="Comparte  información acerca de tu  salud con tu aparato de tu Kit de Bienvenida, por ejemplo, tu termómetro. Esta información podrás enviarlas a tu doctor mediante Whatsapp de Anna o comentarle en plena cita virtual. Hazte chequeos"
          level="base"
        />
      </div>

      <div className="flex justify-center items-center">
        <Image
          src="/assets/benefits.png"
          alt="Not Results"
          width={190}
          height={350}
          hasShadow={false}
        />
      </div>

      <div className="flex flex-col gap-3">
        <Button
          className="w-full"
          onClick={() => {
            nextSignInStep();
          }}
        >
          Continuar
        </Button>
      </div>
    </div>
  );
};
