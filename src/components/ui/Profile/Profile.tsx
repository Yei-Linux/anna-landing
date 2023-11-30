import { useSession } from 'next-auth/react';
import { Image } from '../Image';
import { Text } from '../Text';
export const Profile = () => {
  const { data } = useSession();
  const info = data?.user?.email;

  if (!data?.user) return null;
  if (!info) return null;

  return (
    <div className="mb-5 border-2 border-neutralPrimary p-4 cursor-pointer flex gap-3">
      <Image
        src="/assets/user.png"
        alt="user_profile"
        width={50}
        height={50}
        hasShadow={false}
      />
      <div>
        <Text text={'Hola ' + data?.user?.email} level="base" as="p" />
        {(data?.user as any)?.carePlusPlanPrice && (
          <Text text="Con Care+" level="sm" as="p" />
        )}
      </div>
    </div>
  );
};
