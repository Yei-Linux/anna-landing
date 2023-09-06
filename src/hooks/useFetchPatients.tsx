import { useEffect, useState } from 'react';
import { getPatients } from '../services';

export const useFetchPatients = () => {
  const [patients, setPatients] = useState();

  const execute = async () => {
    const response = await getPatients();
    setPatients(response);
  };

  useEffect(() => {
    execute();
  }, []);

  return { patients };
};
