import { Text } from '../../../../../ui/Text';
import { Image } from '../../../../../ui/Image';
import { Button } from '../../../../../ui/Button';
import { useStepsStore } from '../../../../../../store';
import { Fragment } from 'react';

export const BenefisActionsForCronic = () => {
  const { nextSignInStep, setCurrentSignInStep, currentSignInStep } =
    useStepsStore();

  return (
    <Fragment>
      <Button
        className="w-full"
        onClick={() => {
          setCurrentSignInStep(currentSignInStep + 2);
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
    </Fragment>
  );
};

export const BenefisActionsForNotCronic = () => {
  const { nextSignInStep } = useStepsStore();

  return (
    <Fragment>
      <Button
        className="w-full"
        onClick={() => {
          nextSignInStep();
        }}
      >
        Quiero asesoría gratuita
      </Button>
    </Fragment>
  );
};

export type TBenefits = {
  children: React.ReactNode;
};
export const Benefits = ({ children }: TBenefits) => {
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

      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
};
