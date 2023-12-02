import { useEffect, useState } from 'react';
import { getBookingAppointments } from '../services/booking-appointment';
import { TBookingAppointment } from '../components/anna-care/Platform/Appointments/Appointments';
import { useSession } from 'next-auth/react';

export const useGetBookingAppointments = () => {
  const { status } = useSession();
  const [bookingAppointments, setBookignAppointments] = useState<
    Array<TBookingAppointment>
  >([]);

  const fetchBooking = async () => {
    if (status !== 'authenticated') return;
    const res = await getBookingAppointments();
    if (!res) return;

    setBookignAppointments(res);
  };

  useEffect(() => {
    fetchBooking();
  }, [status]);

  return { bookingAppointments };
};
