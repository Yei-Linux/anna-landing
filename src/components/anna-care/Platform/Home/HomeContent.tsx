import { Text } from '../../../ui/Text';
import { Image } from '../../../ui/Image';
import { Button } from '../../../ui/Button';
import { Pill } from '../../../ui/Pill';

import { Profile } from '../../../ui/Profile/Profile';
import { Appointments } from '../Appointments/Appointments';
import { useGetBookingAppointments } from '../../../../hooks/useGetBooking';

export const HomeContent = () => {
    const { data } = useSession();
  const { handleCarePlus, handleTreatment, handleChangeCondition } = useHome();
  const isNewUser = !(data?.user as any)?.fullName;
  const haspaymentPlansId = (data?.user as any)?.paymentPlansId;
  const { bookingAppointments, status } = useGetBookingAppointments();

  return (
    <div className="flex flex-col items-center pb-7 gap-3">
      <div className="w-full h-[10px] bg-neutralPrimary" />
      <div className="w-full max-w-[1000px]">
        <Profile hasBorder={false} hasImage={false} />

        <Text
          text="¿Te sientes mal?"
          className="text-primary text-center"
          level="lg"
          as="h3"
        />
        <Text
          className="text-center text-neutralStrong #8a8a8a"
          text="Comienza a cuidarte desde casa"
          level="base"
        />
      </div>

      <div className="max-w-[1000px]">
        <Image
          hasShadow={false}
          src="/assets/pildores.png"
          alt="Section One"
          width={140}
          height={140}
        />
      </div>
      <div className="flex flex-col items-center gap-3 w-[100%] mt-7 mb-3 max-w-[1000px]">
        {status === 'authenticated' && !isNewUser && haspaymentPlansId && (
          <Text
            text="Cambiar tu condición cronica"
            className="text-primary text-center text-[16px] underline underline-offset-4 cursor-pointer"
            level="base"
            as="h3"
            onClick={handleChangeCondition}
          />
        )}
        {!haspaymentPlansId && (
          <Button className="max-w-[350px] w-[100%]" onClick={handleCarePlus}>
            Prueba Care+
          </Button>
        )}
        <Button
          onClick={handleTreatment}
          className="bg-white !text-primary border-2 border-primary max-w-[350px] w-[100%]"
        >
          Tratarme
        </Button>
      </div>

      <div className="w-full h-[10px] bg-neutralPrimary" />

      <div className="flex flex-col gap-5 w-[95%] max-w-[350px] mt-3">
        <div className="flex gap-3">
          <div className="flex items-center justify-center">
            <Image
              hasShadow={false}
              src="/assets/pildores2.png"
              alt="Section One"
              width={74}
              height={74}
            />
          </div>
          <div className="max-w-[250px]">
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
      {status === 'authenticated' && (
        <div className="w-[95%] mt-7 flex flex-col gap-7 max-w-[1000px]">
          <Text
            text={
              !bookingAppointments.length
                ? 'Aún no tienes citas :('
                : 'Mis citas:'
            }
            className="text-primary"
            level="lg"
            as="h3"
          />
          {bookingAppointments.map((booking) => (
            <Appointments {...booking} />
          ))}
        </div>
      )}
    </div>
  );
};
function useSession(): { data: any; } {
    throw new Error('Function not implemented.');
}

function useHome(): { handleCarePlus: any; handleTreatment: any; handleChangeCondition: any; } {
    throw new Error('Function not implemented.');
}

