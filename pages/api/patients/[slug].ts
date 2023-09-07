import type { NextApiRequest, NextApiResponse } from 'next';
import { getPatientById } from '../../../back/services';

type Data = {
  data: any[];
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const id = req.query?.slug as string;

  try {
    if (!id) throw new Error('Id is required');

    const user = await getPatientById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({});
  }
}
