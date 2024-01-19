import { Text } from '../../../../../ui/Text';
import { Button } from '../../../../../ui/Button';
import {
  useLandingBotStore,
  useSignInStore,
  useStepsStore,
} from '../../../../../../store';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TKnowYouForm } from '../../../../../../types/sign-in';
import { knowYouSchema } from '../../../../../../zodSchemas/know-you.zod';
import { FormControllerInput } from '../../../../../ui/FormControllerInput';
import { messages } from '../../../../../../constants/messages';

export const KnowYou = () => {
  const { flags } = useLandingBotStore();
  const signupEnabled = !!flags?.signup_controller?.enabled;

  const { setSigninData, signInData } = useSignInStore();
  const { nextSignInStep } = useStepsStore();
  const { handleSubmit, control } = useForm<TKnowYouForm>({
    resolver: zodResolver(knowYouSchema),
    defaultValues: {
      fullName: signInData?.fullName,
      phone: signInData?.phone,
    },
  });

  const FLOWS = messages(signupEnabled);

  const onSubmit = (data: TKnowYouForm) => {
    setSigninData({ ...data });
    nextSignInStep();
  };

  return (
    <div className="flex flex-col gap-10 p-7">
      <div className="flex flex-col gap-2">
        <Text
          text={FLOWS.KNOW_YOU_SIGNUP.title}
          level="2xl"
          fontWeight="semibold"
          as="h3"
        />
        <Text text={FLOWS.KNOW_YOU_SIGNUP.description} level="base" />
      </div>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <FormControllerInput
          placeholder="Ingresa tu nombre"
          control={control}
          name="fullName"
        />
        <FormControllerInput
          placeholder="Ingresa tu numero de celular"
          control={control}
          name="phone"
        />
        <Button className="w-full" type="submit">
          Continuar
        </Button>
      </form>
    </div>
  );
};
