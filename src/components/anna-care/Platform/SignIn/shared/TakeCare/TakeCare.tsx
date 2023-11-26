import TextField from '@mui/material/TextField';
import { Text } from '../../../../../ui/Text';
import { Button } from '../../../../../ui/Button';
import { Image } from '../../../../../ui/Image';
import { useSignInStore, useStepsStore } from '../../../../../../store';

export const TakeCare = () => {
  const { setSigninData, signInData } = useSignInStore();
  const { nextSignInStep } = useStepsStore();

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
        <div className="flex flex-col gap-3">
          <Button className="w-full" onClick={() => nextSignInStep()}>
            Continuar
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-[48%] h-[2px] bg-neutralStrong" />
            <div className="w-[4%] text-center">o</div>
            <div className="w-[48%] h-[2px] bg-neutralStrong" />
          </div>
          <Button
            className="w-full !rounded-sm !bg-white !text-left !text-neutralStrong !border-[1px] !border-neutralStrong py-3 flex gap-3 items-center"
            onClick={() => nextSignInStep()}
          >
            <Image
              src="/assets/Google.png"
              alt="Not Results"
              width={18}
              height={18}
              hasShadow={false}
            />
            <span>Continuar con Google</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
