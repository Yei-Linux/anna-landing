import { signOut, useSession } from 'next-auth/react';
import { Image } from '../../../ui/Image';
import { Text } from '../../../ui/Text';
import { Button } from '../../../ui/Button';
import { Profile } from '../../../ui/Profile/Profile';
import { useHome } from '../Home/useHome';
import { useLandingBotStore } from '../../../../store';

export const MenuLoggedContent = () => {
  const { data } = useSession();
  const haspaymentPlansIde = (data?.user as any)?.paymentPlansId;
  const { handleCarePlus } = useHome();
  const { toggleMenu } = useLandingBotStore();

  return (
    <div className="h-[85%] p-4 flex flex-col justify-between max-w-[500px] mx-auto">
      <div>
        <Profile />
        <div className="p-4 cursor-pointer flex gap-3">
          <Image
            src="/assets/headset.png"
            alt="headset"
            width={30}
            height={30}
            hasShadow={false}
          />
          <Text text="Ayuda" level="base" as="p" />
        </div>
      </div>

      <div className="flex flex-col gap-3 w-[100%]">
        {!haspaymentPlansIde && (
          <Button className="w-[100%]" onClick={handleCarePlus}>
            Prueba Care+
          </Button>
        )}
        <Button
          onClick={() => {
            signOut({ redirect: false });
            toggleMenu();
          }}
          className="bg-white !text-primary border-2 border-primary w-[100%]"
        >
          Salir de la cuenta
        </Button>
      </div>
    </div>
  );
};
