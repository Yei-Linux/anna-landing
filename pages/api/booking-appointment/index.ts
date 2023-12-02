import type { NextApiRequest, NextApiResponse } from 'next';
import { createAppointment, getAppointments } from '../../../back/services';
import { decode } from 'next-auth/jwt';
import { AUTH_SECRET } from '../../../back/auth/constants';

const post = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const body = req.body;

  if (!body) {
    return res.status(500).json([]);
  }

  if (!body.userId) {
    return res.status(500).json([]);
  }

  try {
    const appointment = await createAppointment(body);
    return res.status(201).json(appointment);
  } catch (error) {
    return res.status(500).json([]);
  }
};

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
    const appointments = await getAppointments(email);
    return res.status(200).json(appointments);
  } catch (error) {
    return res.status(500).json([]);
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'POST') {
    return await post(req, res);
  }
  if (req.method === 'GET') {
    return await get(req, res);
  }

  return res.status(500).json([]);
}
