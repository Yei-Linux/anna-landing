import { useEffect } from 'react';
import { useStepsStore, useSignInStore } from '../../../../../../store';
import { Button } from '../../../../../ui/Button';
import { Text } from '../../../../../ui/Text';

export const YouAreNotApprovedYet = () => {
  const { clearSigninData } = useSignInStore();
  const { setCurrentSignInStep, setIsLastStep } = useStepsStore();
  const { toggleSignIn } = useSignInStore();

  const handleGotItButton = () => {
    toggleSignIn();
    clearSigninData();
    setCurrentSignInStep(1);
  };

  useEffect(() => {
    setIsLastStep(true);
  }, []);

  return (
    <div className="flex flex-col md:justify-between gap-7 h-full p-4">
      <div className="flex justify-center items-center">
        <img
          src="/assets/heartnew.png"
          alt="subreason"
          width="100px"
          style={{ maxHeight: '100px' }}
        />
      </div>

      <div className="flex flex-col gap-10">
        <Text
          text="Tu solicitud ya está en revisión!"
          level="base"
          fontWeight="semibold"
          as="h3"
          className="text-primary text-left"
        />
        <Text
          text="En menos de 24 hrs, el equipo de Anna va a revisar tu solicitud y te aprobará. Independientemente de tu país!"
          level="base"
          as="p"
          fontWeight="light"
        />
        <Text
          text="Te llegará una notificación por Whatsapp para coordinar el pago y activación de tu cuenta"
          level="base"
          as="p"
        />
      </div>

      <Button className="w-full" onClick={handleGotItButton}>
        Entendido!
      </Button>
    </div>
  );
};
