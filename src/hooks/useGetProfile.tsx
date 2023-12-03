import { useEffect, useRef } from 'react';
import { getProfile } from '../services';
import { getCsrfToken, useSession } from 'next-auth/react';

export const useGetProfile = () => {
  const firstRender = useRef(false);
  const { data, update } = useSession();
  const handler = async () => {
    try {
      const response = await getProfile();

      if (
        (data?.user as any)?.cronicalDiseasesId ===
          response?.cronicalDiseasesId &&
        (data?.user as any)?.paymentPlansId === response?.paymentPlansId
      ) {
        firstRender.current = true;
        return;
      }

      await getCsrfToken();
      await update({
        ...data,
        user: {
          ...data?.user,
          cronicalDiseasesId: response?.cronicalDiseasesId,
          paymentPlansId: response?.paymentPlansId,
        },
      });
      firstRender.current = true;
    } catch (error) {}
  };

  useEffect(() => {
    if (!data?.user) return;
    if (firstRender.current) return;
    handler();
  }, [data?.user]);
};
