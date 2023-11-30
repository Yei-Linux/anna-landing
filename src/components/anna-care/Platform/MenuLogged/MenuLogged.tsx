import { Image } from '../../../ui/Image';
import { Text } from '../../../ui/Text';

export const MenuLoggedContent = () => (
  <div className="h-full p-4">
    <div className="border-2 border-neutralPrimary p-4 cursor-pointer flex gap-3">
      <Image
        src="/assets/user.png"
        alt="user_profile"
        width={50}
        height={50}
        hasShadow={false}
      />
      <div>
        <Text text="Jesus Alvan" level="base" as="p" />
        <Text text="Con Care+" level="sm" as="p" />
      </div>
    </div>

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
);
