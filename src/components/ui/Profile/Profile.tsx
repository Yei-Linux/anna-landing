import { useSession } from 'next-auth/react';
import { Image } from '../Image';
import { Text } from '../Text';
import classNames from 'classnames';
export interface IProfile {
  hasBorder?: boolean;
}
export const Profile = ({ hasBorder = true }: IProfile) => {
  const { data } = useSession();
  const info = data?.user?.email;

  if (!data?.user) return null;
  if (!info) return null;

  return (
    <div
      className={classNames(
        'mb-5 p-4 cursor-pointer flex flex-wrap justify-center items-center gap-3',
        {
          'border-2 border-neutralPrimary': hasBorder,
        }
      )}
    >
      <Image
        src="/assets/user.png"
        alt="user_profile"
        width={50}
        height={50}
        hasShadow={false}
      />
      <div>
        <Text text={'Hola ' + data?.user?.email} level="base" as="p" />
        {(data?.user as any)?.paymentPlansId && (
          <Text text="Con Care+" level="sm" as="p" />
        )}
      </div>
    </div>
  );
};
