import type { NextApiRequest, NextApiResponse } from 'next';
import { getDoctorByEmail } from '../../back/services/doctor.service';
import { comparePass } from '../../back/helpers/hashing';
import { Config } from '../../back/config/constants';
import { sign } from '../../back/helpers/jwt';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const body = req.body;

  if (!body) {
    return res.status(500).json({
      message: 'Empty Request',
      error: true,
    });
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

    const token = await sign(
      {
        email: doctor.email,
        fullName: doctor.fullName,
        documentNumber: doctor.documentNumber,
      },
      Config.JWT_SECRET
    );

    return res
      .status(200)
      .json({ token, message: 'Login Succesful', error: false });
  } catch (error) {
    return res.status(500).json({
      message: 'Error in process',
    });
  }
}
