import TextField from '@mui/material/TextField';
import { Text } from '../../../../../ui/Text';
import { Button } from '../../../../../ui/Button';
import { useSignInStore, useStepsStore } from '../../../../../../store';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TKnowYouForm } from '../../../../../../types/sign-in';
import { knowYouSchema } from '../../../../../../zodSchemas/know-you.zod';
import { FormControllerInput } from '../../../../../ui/FormControllerInput';

export const KnowYou = () => {
  const { setSigninData, signInData } = useSignInStore();
  const { nextSignInStep } = useStepsStore();
  const { handleSubmit, control } = useForm<TKnowYouForm>({
    resolver: zodResolver(knowYouSchema),
    defaultValues: {
      fullName: signInData?.fullName,
      phone: signInData?.phone,
    },
  });

  const onSubmit = (data: TKnowYouForm) => {
    setSigninData({ ...data });
    nextSignInStep();
  };

  return (
    <div className="flex flex-col gap-10 p-7">
      <div className="flex flex-col gap-2">
        <Text text="A conocerte" level="2xl" fontWeight="semibold" as="h3" />
        <Text
          text="Completa los datos para que Anna te de una mejor experiencia"
          level="base"
        />
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
