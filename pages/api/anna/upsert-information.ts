import type { NextApiRequest, NextApiResponse } from 'next';
import { updatePatientByEmail } from '../../../back/services';

async function post(req: NextApiRequest, res: NextApiResponse<any>) {
  const body = req.body;

  if (!body) {
    return res.status(500).json({
      message: 'Empty Request',
    });
  }

  if (!body.email) {
    return res.status(500).json({
      message: 'Email is required',
    });
  }

  const infoToUpsert = {
    fullName: body.fullName,
    hasAnyCronicDesease: body.hasAnyCronicDesease,
    cronicDesease: body.cronicDesease,
  };

  try {
    const { password, ...user } = await updatePatientByEmail(
      infoToUpsert,
      body.email
    );

    return res.status(200).json({
      data: user,
      message: 'User updated or created succesful',
      error: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error in process',
    });
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'POST') {
    return await post(req, res);
  }

  return res.status(500).json([]);
}
