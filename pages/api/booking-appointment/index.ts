import type { NextApiRequest, NextApiResponse } from 'next';
import { createAppointment, createClinicHistory } from '../../../back/services';

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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'POST') {
    return await post(req, res);
  }

  return res.status(500).json([]);
}
