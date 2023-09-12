import type { NextApiRequest, NextApiResponse } from 'next';
import { createDoctor } from '../../back/services/doctor.service';
import { crypt } from '../../back/helpers/hashing';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const body = req.body;

  if (!body) {
    res.status(500).json({
      message: 'Empty Request',
    });
    return;
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
