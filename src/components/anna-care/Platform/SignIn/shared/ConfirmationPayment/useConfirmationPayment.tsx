import { useSession } from 'next-auth/react';
import { PHONE_NUMBER } from '../../../../../../constants';
import {
  getTreatmentMessage,
  getBotUrlSender,
} from '../../../../../../helpers';
import { useBookingAppointment } from '../../../../../../hooks/useBookingAppointment';
import { useTreatmentStore } from '../../../../../../store';

export const useConfirmationPayment = () => {
  const { treatmentData } = useTreatmentStore();
  const { data } = useSession();
  const { handlerBooking } = useBookingAppointment();

  const message = treatmentData
    ? getTreatmentMessage({
        turnText: treatmentData.hourText,
        diseaseText: treatmentData.diseaseText,
        dayText: treatmentData.dayText,
      })
    : '';
  const link = getBotUrlSender(PHONE_NUMBER, message);

  const handleConfirmMedicalAppointment = async () => {
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
  };

  return { treatmentData, handleConfirmMedicalAppointment };
};
