import TextField from '@mui/material/TextField';
import { Text } from '../../../../../ui/Text';
import { Button } from '../../../../../ui/Button';
import { useSignInStore } from '../../../../../../store';

export const KnowYou = () => {
  const { setSigninData, signInData, nextSignInStep } = useSignInStore();

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <Text text="A conocerte" level="2xl" fontWeight="semibold" as="h3" />
        <Text
          text="Completa los datos para que Anna te de una mejor experiencia"
          level="base"
        />
      </div>

      <div className="flex flex-col gap-5">
        <TextField
          placeholder="Ingresa tu nombre"
          variant="outlined"
          value={signInData?.name}
          onChange={(e) =>
            setSigninData({
              name: e.target.value,
            })
          }
        />
        <TextField
          placeholder="Ingresa tu numero de celular"
          variant="outlined"
          value={signInData?.phone}
          onChange={(e) =>
            setSigninData({
              phone: e.target.value,
            })
          }
        />
        <Button className="w-full" onClick={() => nextSignInStep()}>
          Continuar
        </Button>
      </div>
    </div>
  );
};
