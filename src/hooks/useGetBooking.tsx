import { useEffect, useState } from 'react';
import { getBookingAppointments } from '../services/booking-appointment';
import { TBookingAppointment } from '../components/anna-care/Platform/Appointments/Appointments';
import { useSession } from 'next-auth/react';

export const useGetBookingAppointments = () => {
  const { data, status } = useSession();
  const [bookingAppointments, setBookignAppointments] = useState<
    Array<TBookingAppointment>
  >([]);

  const fetchBooking = async () => {
    if (!(data?.user as any)?.fullName) return;
    const res = await getBookingAppointments();
    if (!res) return;

    setBookignAppointments(res);
  };

  useEffect(() => {
    fetchBooking();
  }, [(data?.user as any)?.fullName]);

  return { bookingAppointments, status };
};
