import { useSignInStore, useStepsStore } from '../../../../../../store';
import { Button } from '../../../../../ui/Button';
import { Text } from '../../../../../ui/Text';
import { Image } from '../../../../../ui/Image';
import { useRegisterUser } from '../../../../../../hooks/useRegisterUser';
import { useSession } from 'next-auth/react';

export const AnyCondition = () => {
  const { data } = useSession();
  const { setSigninData, signInData } = useSignInStore();
  const { nextSignInStep } = useStepsStore();
  const { handlerUpsertInfo, isRegistering } = useRegisterUser();

  return (
    <div className="flex flex-col justify-between gap-10 h-full p-7">
      <div className="flex flex-col gap-2">
        <Text
          text="¿Sufres de alguna condición crónica?"
          level="2xl"
          fontWeight="semibold"
          as="h3"
        />
      </div>

      <div className="flex justify-center items-center">
        <Image
          src="/assets/tonometer.png"
          alt="Not Results"
          width={200}
          height={200}
          hasShadow={false}
        />
      </div>

      <div className="flex flex-col gap-3">
        <Button
          className="w-full"
          onClick={() => {
            setSigninData({
              hasAnyCronicDesease: true,
            });
            nextSignInStep();
          }}
        >
          Si, tengo condición
        </Button>
        <Button
          className="w-full bg-white !text-primary !border-2 !border-primary"
          onClick={() => {
            setSigninData({
              hasAnyCronicDesease: false,
            });

            if (!signInData) return;
            if (!data?.user?.email) return;
            handlerUpsertInfo(
              {
                fullName: signInData.fullName,
                hasAnyCronicDesease: false,
              },
              data?.user?.email
            );
          }}
        >
          No, no tengo
        </Button>
      </div>
    </div>
  );
};
