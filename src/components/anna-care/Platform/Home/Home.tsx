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
import { useGetBookingAppointments } from '../../../../hooks/useGetBooking';
import { Appointments } from '../Appointments/Appointments';

export const Home = () => {
  const { close, isOpen, message, severity } = useNotificationStore();
  const { handleCarePlus, handleTreatment } = useHome();
  const { data } = useSession();
  const haspaymentPlansId = (data?.user as any)?.paymentPlansId;
  const { bookingAppointments } = useGetBookingAppointments();

  return (
    <Fragment>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={isOpen}
        autoHideDuration={6000}
        onClose={close}
      >
        <Alert onClose={close} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
      <SignIn />
      <div className="flex flex-col items-center gap-10">
        <div>
          <Profile hasBorder={false} />

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
        <div className="flex flex-col items-center gap-3 w-[100%]">
          {!haspaymentPlansId && (
            <Button className="max-w-[250px] w-[100%]" onClick={handleCarePlus}>
              Prueba Care+
            </Button>
          )}
          <Button
            onClick={handleTreatment}
            className="bg-white !text-primary border-2 border-primary max-w-[250px] w-[100%]"
          >
            Tratarme
          </Button>
        </div>

        <div>
          {bookingAppointments.map((booking) => (
            <Appointments {...booking} />
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex gap-7">
            <div>
              <Image
                hasShadow={false}
                src="/assets/pildores2.png"
                alt="Section One"
                width={74}
                height={74}
              />
            </div>
            <div className="max-w-[120px] sm:max-w-[150px] md:max-w-[250px]">
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
