import type { NextApiRequest, NextApiResponse } from 'next';
import { createDoctor } from '../../back/services/doctor.service';
import { crypt } from '../../back/helpers/hashing';
import { Config } from '../../back/config/constants';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (!Config.IS_API_CREATE_DOCTORS_ENABLE) {
    return res.status(500).json({
      message: 'You are not available to create a user',
    });
  }

  const body = req.body;

  if (!body) {
    return res.status(500).json({
      message: 'Empty Request',
    });
  }

  const email = body.email;
  const password = crypt(body.password);
  const fullName = body.fullName;
  const documentNumber = body.documentNumber;

  const isValidBody = email && password && fullName && documentNumber;
  if (!isValidBody) {
    res.status(500).json({
      message: 'Invalid Request',
      error: true,
    });
    return;
  }

  try {
    const doctor = await createDoctor({
      email,
      password,
      fullName,
      documentNumber,
    });

    res.status(200).json({
      data: doctor,
      message: 'Doctor created succesful',
      error: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error in process',
    });
  }
}
