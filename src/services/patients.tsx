import axios from 'axios';

export const getPatients = async () => {
  try {
    const { data } = await axios.get('/api/get-patients');
    return data;
  } catch (error) {
    return [];
  }
};
