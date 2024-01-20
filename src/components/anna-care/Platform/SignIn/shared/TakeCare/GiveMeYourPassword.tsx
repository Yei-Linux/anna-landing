import { Text } from '../../../../../ui/Text';
import { Button } from '../../../../../ui/Button';
import { FormControllerInput } from '../../../../../ui/FormControllerInput';
import { useForm } from 'react-hook-form';
import { TSignInForm } from '../../../../../../types/sign-in';
import { giveMeYourPasswordSchema } from '../../../../../../zodSchemas/sign-in.zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSignIn } from '../../../../../../hooks/useSignIn';

import { useSignInStore } from '../../../../../../store';

export interface IGiveMeYourPassword {
  onContinue?: () => void;
}

export const GiveMeYourPassword = ({ onContinue }: IGiveMeYourPassword) => {
  const { signInData, setSigninData } = useSignInStore();
  const { signinHandler } = useSignIn();
  const { handleSubmit, control } = useForm<TSignInForm>({
    resolver: zodResolver(giveMeYourPasswordSchema),
  });

  const handleContinue = async (data: { password: string }) => {
    if (!signInData?.email) return;

    const success = await signinHandler({
      email: signInData?.email,
      password: data.password,
    });
    if (!success) {
      setSigninData({ email: undefined, password: undefined });
      return;
    }

    onContinue?.();
  };

  return (
    <div className="flex flex-col gap-7 p-7">
      <div className="flex flex-col gap-2">
        <Text
          text="Genial ya tienes una cuenta aprovada!"
          level="2xl"
          fontWeight="semibold"
          as="h3"
        />
        <Text
          text="Por favor ingresa tu contraseña o coloca la que ya tienes para logearte!"
          level="base"
        />
      </div>

      <form
        className="flex flex-col gap-5"
        onSubmit={handleSubmit(handleContinue)}
      >
        <FormControllerInput
          placeholder="Ingresa tu contraseña"
          control={control}
          name="password"
          type="password"
        />

        <div className="flex flex-col gap-3">
          <Button className="w-full" type="submit">
            Continuar
          </Button>
        </div>
      </form>
    </div>
  );
};
