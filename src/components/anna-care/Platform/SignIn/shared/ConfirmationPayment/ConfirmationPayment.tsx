import { useSession } from 'next-auth/react';
import { useBookingAppointment } from '../../../../../../hooks/useBookingAppointment';
import { useTreatmentStore } from '../../../../../../store';
import { Button } from '../../../../../ui/Button';
import { Text } from '../../../../../ui/Text';
import { ConfirmationDetails } from './Details';

export const ConfirmationPayment = () => {
  const { data } = useSession();
  const { treatmentData } = useTreatmentStore();
  const { handlerBooking } = useBookingAppointment();

  return (
    <div className="flex flex-col justify-between gap-10 h-full p-4">
      <div className="flex flex-col gap-2">
        <Text
          text="Confirmación"
          level="base"
          fontWeight="semibold"
          as="h3"
          className="text-primary text-center"
        />
        <Text
          text="Te estaremos respondiendo por Whatsapp para la confirmación de la hora entre el horario elegido."
          level="base"
          as="p"
        />
      </div>

      <div className="flex justify-center items-center">
        <ConfirmationDetails />
      </div>

      <div>
        <Text
          text="Se te enviará el link de la reunión a tu correo electrónico registrado."
          level="base"
          as="p"
        />
        <Text
          text="Pago: Deberás realizar el pago y enviar el voucher del pago mediante Whatsapp."
          level="base"
          as="p"
        />
      </div>
      <Button
        className="w-full"
        onClick={() => {
          if (!treatmentData) return;
          if (!data) return;
          handlerBooking({
            day: new Date(treatmentData.day).toLocaleString() ?? '',
            turn: treatmentData.hour,
            diseaseOption: treatmentData.disease,
            userId: (data.user as any).id,
          });
        }}
      >
        Confirmar visital virtual
      </Button>
    </div>
  );
};
