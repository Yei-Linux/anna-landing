import type { NextApiRequest, NextApiResponse } from 'next';
import { getDoctorByEmail } from '../../back/services/doctor.service';
import { comparePass } from '../../back/helpers/hashing';
import jwt from 'jsonwebtoken';
import { Config } from '../../back/config/constants';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const body = req.body;

  if (!body) {
    res.status(500).json({
      message: 'Empty Request',
      error: true,
    });
    return;
  }

  const email = body.email;
  const password = body.password;

  try {
    const doctor = await getDoctorByEmail(email);
    if (!doctor) {
      return res.status(500).json({
        message: 'Doctor not found',
        error: true,
      });
    }

    const isEqualPass = comparePass(password, doctor.password);
    if (!isEqualPass) {
      return res.status(500).json({
        message: 'Incorrect Password',
        error: true,
      });
    }

    const token = jwt.sign(
      {
        email: doctor.email,
        fullName: doctor.fullName,
        documentNumber: doctor.documentNumber,
      },
      Config.JWT_SECRET,
      {
        expiresIn: Config.JWT_TOKEN_EXPIRATION,
      }
    );

    res.status(200).json({ token, message: 'Login Succesful', error: false });
  } catch (error) {
    return res.status(500).json({
      message: 'Error in process',
    });
  }
}
