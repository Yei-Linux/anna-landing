import TextField from '@mui/material/TextField';
import { Text } from '../../../../../ui/Text';
import { Button } from '../../../../../ui/Button';
import { useSignInStore } from '../../../../../../store';

export const TakeCare = () => {
  const { setSigninData, signInData, nextSignInStep } = useSignInStore();

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <Text
          text="Anotado.A cuidarte"
          level="2xl"
          fontWeight="semibold"
          as="h3"
        />
        <Text
          text="Como ultimo paso registrate o inicia sesión en Anna.  Es rápido y gratis. "
          level="base"
        />
      </div>

      <div className="flex flex-col gap-5">
        <TextField
          placeholder="Ingresa tu correo electrónico"
          variant="outlined"
          value={signInData?.email}
          onChange={(e) =>
            setSigninData({
              email: e.target.value,
            })
          }
        />
        <TextField
          placeholder="Ingresa tu contraseña"
          variant="outlined"
          value={signInData?.password}
          onChange={(e) =>
            setSigninData({
              password: e.target.value,
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
