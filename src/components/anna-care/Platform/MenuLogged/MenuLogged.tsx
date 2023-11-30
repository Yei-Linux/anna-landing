import { signOut, useSession } from 'next-auth/react';
import { Image } from '../../../ui/Image';
import { Text } from '../../../ui/Text';
import { Button } from '../../../ui/Button';
import { Profile } from '../../../ui/Profile/Profile';

export const MenuLoggedContent = () => {
  return (
    <div className="h-full p-4">
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

      <Button onClick={() => signOut({ redirect: false })}>
        Salir de la cuenta
      </Button>
    </div>
  );
};
