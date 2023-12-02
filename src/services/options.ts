import axios from 'axios';
import { TAnnaOptions } from '../../back/services/options';

export const getAnnaOptions = async (): Promise<TAnnaOptions | undefined> => {
  try {
    const { data } = await axios.get('/api/anna/options');
    return data;
  } catch (error) {
    return undefined;
  }
};
