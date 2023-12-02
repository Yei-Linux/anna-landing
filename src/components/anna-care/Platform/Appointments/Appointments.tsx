import { Image } from '../../../ui/Image';
import { Text } from '../../../ui/Text';
import { useMemo } from 'react';

export type TBookingAppointment = {
  id: string;
  day: string;
  turn: number;
  diseaseOption: string;
  createdAt: Date;
};
export const Appointments = ({
  id,
  day,
  turn,
  diseaseOption,
  createdAt,
}: TBookingAppointment) => {
  const created = useMemo(() => {
    const date = new Date(createdAt);
    return `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  }, [createdAt]);

  return (
    <div className="mb-5 border-2 border-neutralPrimary p-4 cursor-pointer flex flex-wrap justify-center items-center gap-3">
      <Image
        src="/assets/tonometer.png"
        alt="booking"
        width={50}
        height={50}
        hasShadow={false}
      />
      <div>
        <Text
          text={`Tienes una cita el ${day} en el turno ${turn} por ${diseaseOption}`}
          level="base"
          as="p"
          className="text-[15px]"
        />
        <Text
          text={`Creado: ${created}`}
          level="sm"
          as="p"
          className="text-[10px]"
        />
      </div>
    </div>
  );
};
