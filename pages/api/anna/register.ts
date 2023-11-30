import type { NextApiRequest, NextApiResponse } from 'next';
import { crypt } from '../../../back/helpers/hashing';
import { signUpPatient } from '../../../back/services';

async function post(req: NextApiRequest, res: NextApiResponse<any>) {
  const body = req.body;

  if (!body) {
    return res.status(500).json({
      message: 'Empty Request',
    });
  }

  const email = body.email;
  const password = crypt(body.password);

  const isValidBody = email && password;
  if (!isValidBody) {
    return res.status(500).json({
      message: 'Invalid Request',
      error: true,
    });
  }

  try {
    const { password: newPass, ...user } = await signUpPatient({
      email,
      password,
    });
    return res.status(200).json({
      data: user,
      message: 'User created succesful',
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
