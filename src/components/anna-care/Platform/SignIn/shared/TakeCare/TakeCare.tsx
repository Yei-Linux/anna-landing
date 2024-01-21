import { Text } from '../../../../../ui/Text';
import { Button } from '../../../../../ui/Button';
import { Image } from '../../../../../ui/Image';
import { FormControllerInput } from '../../../../../ui/FormControllerInput';
import { useForm } from 'react-hook-form';
import { TSignInForm, TWaitlistForm } from '../../../../../../types/sign-in';
import {
  signInZodSchema,
  waitListZodSchema,
} from '../../../../../../zodSchemas/sign-in.zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useSignIn } from '../../../../../../hooks/useSignIn';

import { useLandingBotStore, useSignInStore } from '../../../../../../store';
import { messages } from '../../../../../../constants/messages';
import { useValidateUserWaitlist } from '../../../../../../hooks/useValidateUserWaitlist';

export const TakeCare = () => {
  const { flags } = useLandingBotStore();
  const signupEnabled = !!flags?.signup_controller?.enabled;

  const { setSigninData, signInData } = useSignInStore();
  const { signinHandler } = useSignIn();
  const { handleSubmit, control } = useForm<TSignInForm>({
    resolver: zodResolver(signupEnabled ? signInZodSchema : waitListZodSchema),
    defaultValues: {
      email: signInData?.email,
      password: signInData?.password,
    },
  });
  const { validateUserFromWaitList } = useValidateUserWaitlist();
  const FLOWS = messages(signupEnabled);

  const continueToWaitList = (data: TWaitlistForm) => {
    setSigninData({ ...data });

    if (!data.email) return;
    validateUserFromWaitList(data.email);
  };

  return (
    <div className="flex flex-col gap-7 p-7">
      <div className="flex flex-col gap-2">
        <Text
          text={FLOWS.TAKE_CARE_SIGNUP.title}
          level="2xl"
          fontWeight="semibold"
          as="h3"
        />
        <Text text={FLOWS.TAKE_CARE_SIGNUP.description} level="base" />
      </div>

      <form
        className="flex flex-col gap-5"
        onSubmit={handleSubmit(
          flags?.signup_controller.enabled ? signinHandler : continueToWaitList
        )}
      >
        <FormControllerInput
          placeholder="Ingresa tu correo electrónico"
          control={control}
          name="email"
        />
        {signupEnabled && (
          <FormControllerInput
            placeholder="Ingresa tu contraseña"
            control={control}
            name="password"
            type="password"
          />
        )}

        <div className="flex flex-col gap-3">
          <Button className="w-full" type="submit">
            Continuar
          </Button>
          {signupEnabled && (
            <>
              <div className="flex items-center">
                <div className="w-[23%] h-[2px] bg-neutralStrong" />
                <div className="w-[54%] text-center">Eres nuevo aquí?</div>
                <div className="w-[23%] h-[2px] bg-neutralStrong" />
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
            </>
          )}
        </div>
      </form>
    </div>
  );
};
