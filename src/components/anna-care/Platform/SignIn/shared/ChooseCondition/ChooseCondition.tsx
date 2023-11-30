import { useSession } from 'next-auth/react';
import { useRegisterUser } from '../../../../../../hooks/useRegisterUser';
import { useSignInStore } from '../../../../../../store';
import { Button } from '../../../../../ui/Button';
import { Text } from '../../../../../ui/Text';
import { Options } from '../Options/Options';
import { cronicalDisease } from '../../../../../../constants/care';

export const ChooseCondition = () => {
  const { data } = useSession();
  const { signInData, setSigninData } = useSignInStore();
  const { handlerUpsertInfo, isRegistering } = useRegisterUser();

  return (
    <div className="flex flex-col justify-between gap-7 h-full p-4">
      <div className="flex flex-col gap-2">
        <Text
          text="Condición"
          level="base"
          fontWeight="semibold"
          as="h3"
          className="text-primary text-center"
        />
        <Text
          text="Porfavor, selecciona la situación crónica la cual llevas seguimiento"
          level="base"
          as="p"
          className="text-center"
        />
      </div>

      <div className="flex justify-center items-center">
        <Options
          compareToId={signInData?.cronicDesease}
          setter={(id) => setSigninData({ cronicDesease: id })}
          options={cronicalDisease.filter(({ id }) => id != -1)}
        />
      </div>

      <Button
        disabled={isRegistering}
        className="w-full"
        onClick={() => {
          if (!signInData) return;
          if (!data?.user?.email) return;
          handlerUpsertInfo(
            {
              fullName: signInData.fullName,
              hasAnyCronicDesease: signInData.hasAnyCronicDesease,
              cronicDesease: signInData.cronicDesease,
            },
            data?.user?.email
          );
        }}
      >
        {isRegistering ? 'Registrando...' : 'Continuar'}
      </Button>
    </div>
  );
};