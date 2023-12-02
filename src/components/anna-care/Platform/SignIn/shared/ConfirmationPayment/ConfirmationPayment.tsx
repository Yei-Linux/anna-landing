import { useSession } from 'next-auth/react';
import { useBookingAppointment } from '../../../../../../hooks/useBookingAppointment';
import { useTreatmentStore } from '../../../../../../store';
import { Button } from '../../../../../ui/Button';
import { Text } from '../../../../../ui/Text';
import { ConfirmationDetails } from './Details';
import {
  getBotUrlSender,
  getTreatmentMessage,
} from '../../../../../../helpers';
import { PHONE_NUMBER } from '../../../../../../constants';

export const ConfirmationPayment = () => {
  const { data } = useSession();
  const { treatmentData } = useTreatmentStore();
  const { handlerBooking } = useBookingAppointment();
  if (!treatmentData) return null;

  const message = getTreatmentMessage({
    turnText: treatmentData.hourText,
    diseaseText: treatmentData.diseaseText,
    dayText: treatmentData.dayText,
  });
  const link = getBotUrlSender(PHONE_NUMBER, message);

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
        <ConfirmationDetails
          turnText={treatmentData.hourText}
          dayText={treatmentData.dayText}
        />
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
        onClick={async () => {
          if (!treatmentData) return;
          if (!data) return;
          await handlerBooking(
            {
              day: treatmentData.dayText,
              turnsId: treatmentData.hour,
              diseasesId: treatmentData.disease,
              userId: (data.user as any).id,
            },
            link
          );
        }}
      >
        Confirmar visital virtual
      </Button>
    </div>
  );
};
