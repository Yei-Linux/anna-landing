import { Text } from '../../../../../ui/Text';
import { Button } from '../../../../../ui/Button';
import { Image } from '../../../../../ui/Image';
import { FormControllerInput } from '../../../../../ui/FormControllerInput';
import { useForm } from 'react-hook-form';
import { TSignInForm } from '../../../../../../types/sign-in';
import { signInZodSchema } from '../../../../../../zodSchemas/sign-in.zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useSignIn } from '../../../../../../hooks/useSignIn';

export const TakeCare = () => {
  const { signinHandler } = useSignIn();
  const { handleSubmit, reset, control } = useForm<TSignInForm>({
    resolver: zodResolver(signInZodSchema),
  });

  return (
    <div className="flex flex-col gap-7 p-7">
      <div className="flex flex-col gap-2">
        <Text
          text="Hola. Hay que conocernos!"
          level="2xl"
          fontWeight="semibold"
          as="h3"
        />
        <Text
          text="Registrate o inicia sesión en Anna.  Es rápido y gratis. "
          level="base"
        />
      </div>

      <form
        className="flex flex-col gap-5"
        onSubmit={handleSubmit(signinHandler)}
      >
        <FormControllerInput
          placeholder="Ingresa tu correo electrónico"
          control={control}
          name="email"
        />
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
          <div className="flex items-center gap-3">
            <div className="w-[48%] h-[2px] bg-neutralStrong" />
            <div className="w-[4%] text-center">o</div>
            <div className="w-[48%] h-[2px] bg-neutralStrong" />
          </div>
          <Button
            className="w-full !bg-white !text-left !text-neutralStrong !border-[1px] !border-neutralStrong py-3 flex gap-3 items-center font-bold"
            onClick={() => signIn('google')}
          >
            <Image
              src="/assets/Google.png"
              alt="Not Results"
              width={18}
              height={18}
              hasShadow={false}
            />
            <strong>Continuar con Google</strong>
          </Button>
        </div>
      </form>
    </div>
  );
};
