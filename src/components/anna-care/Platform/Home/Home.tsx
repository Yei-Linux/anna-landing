import { Text } from '../../../ui/Text';
import { Image } from '../../../ui/Image';
import { Button } from '../../../ui/Button';
import { Pill } from '../../../ui/Pill';
import { Fragment } from 'react';
import { SignIn } from '../SignIn/SignIn';
import { useHome } from './useHome';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useNotificationStore } from '../../../../store';
import { useSession } from 'next-auth/react';
import { Profile } from '../../../ui/Profile/Profile';

export const Home = () => {
  const { close, isOpen, message, severity } = useNotificationStore();
  const { handleCarePlus, handleTreatment } = useHome();
  const { data } = useSession();
  const hasCarePlusPlanPrice = (data?.user as any)?.carePlusPlanPrice;

  return (
    <Fragment>
      <Snackbar open={isOpen} autoHideDuration={6000} onClose={close}>
        <Alert onClose={close} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
      <SignIn />
      <div className="flex flex-col items-center gap-10">
        <div>
          <Profile />
          <Text
            text="¿Te sientes mal?"
            className="text-primary text-center"
            level="lg"
            as="h3"
          />
          <Text
            className="text-center text-neutralStrong"
            text="Comienza a cuidarte desde casa"
            level="base"
          />
        </div>
        <div>
          <Image
            hasShadow={false}
            src="/assets/pildores.png"
            alt="Section One"
            width={140}
            height={140}
          />
        </div>
        <div className="flex flex-col gap-3 ">
          {!hasCarePlusPlanPrice && (
            <Button onClick={handleCarePlus}>Prueba Care+</Button>
          )}
          <Button
            onClick={handleTreatment}
            className="bg-white !text-primary border-2 border-primary"
          >
            Tratarme
          </Button>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex gap-7">
            <div>
              <Image
                hasShadow={false}
                src="/assets/pildores2.png"
                alt="Section One"
                width={63}
                height={74}
              />
            </div>
            <div className="max-w-[300px]">
              <Text text="Monitoreate con Care+" level="base" />
              <Text
                className="text-neutralStrong"
                text="Realiza seguimiento de su salud Recibe tratamiento de cuidado personal y/o control de su enfermedad crónica."
                level="base"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <Pill>+100 miembros</Pill>
            <Pill>24 Provincias</Pill>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
