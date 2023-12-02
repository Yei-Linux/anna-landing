import { useEffect, useState } from 'react';
import { getBookingAppointments } from '../services/booking-appointment';
import { TBookingAppointment } from '../components/anna-care/Platform/Appointments/Appointments';

export const useGetBookingAppointments = () => {
  const [bookingAppointments, setBookignAppointments] = useState<
    Array<TBookingAppointment>
  >([]);

  const fetchBooking = async () => {
    const res = await getBookingAppointments();
    if (!res) return;

    setBookignAppointments(res);
  };

  useEffect(() => {
    fetchBooking();
  }, []);

  return { bookingAppointments };
};
