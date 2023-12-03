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
    const { data } = await axios.post('/api/anna/user', {
      ...req,
      email,
    });
    return data;
  } catch (error) {
    return undefined;
  }
};

export const suscribe = async (paymentPlansId: string, email: string) => {
  try {
    const { data } = await axios.post('/api/anna/suscription', {
      paymentPlansId,
      email,
    });
    return data;
  } catch (error) {
    return undefined;
  }
};

export const getProfile = async () => {
  try {
    try {
      const { data } = await axios.get('/api/anna/user');
      return data;
    } catch (error) {
      return undefined;
    }
  } catch (error) {}
};
