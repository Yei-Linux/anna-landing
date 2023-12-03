import type { NextApiRequest, NextApiResponse } from 'next';
import {
  getAnnaUserByEmail,
  updatePatientByEmail,
} from '../../../back/services';
import { AUTH_SECRET } from '../../../back/auth/constants';
import { decode } from 'next-auth/jwt';

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
    cronicalDiseasesId: body.cronicalDiseasesId,
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

const get = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const sessionToken =
    req.cookies?.['next-auth.session-token'] ||
    req.cookies?.['__Secure-next-auth.session-token'];
  const decoded = await decode({
    token: sessionToken,
    secret: AUTH_SECRET ?? '',
  });
  const email = decoded?.email;

  if (!email) {
    throw new Error('Email is empty');
  }

  try {
    const response = await getAnnaUserByEmail(email);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json([]);
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'GET') {
    return await get(req, res);
  }
  if (req.method === 'POST') {
    return await post(req, res);
  }

  return res.status(500).json([]);
}
