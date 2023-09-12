import bcrypt from 'bcrypt';
import { Config } from '../config/constants';

export const comparePass = (reqPassword: string, dbPassword: string) => {
  return bcrypt.compareSync(reqPassword, dbPassword);
};

export const crypt = (password: string) => {
  return bcrypt.hashSync(password, Config.JWT_SALT);
};
