import axios from 'axios';

export const getPatients = async () => {
  try {
    const { data } = await axios.get('/api/get-patients');
    return data;
  } catch (error) {
    return [];
  }
};

export const upsertUserInformation = async (req: any, email: string) => {
  try {
    const { data } = await axios.post('/api/anna/upsert-information', {
      ...req,
      email,
    });
    return data;
  } catch (error) {
    return undefined;
  }
};

export const suscribe = async (carePlusPlanPrice: number, email: string) => {
  try {
    const { data } = await axios.post('/api/anna/suscription', {
      carePlusPlanPrice,
      email,
    });
    return data;
  } catch (error) {
    return undefined;
  }
};
