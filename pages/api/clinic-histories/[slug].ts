import type { NextApiRequest, NextApiResponse } from 'next';
import {
  getClinicHistoryById,
  updateClinicHistory,
} from '../../../back/services';

const put = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const id = req.query?.slug as string;
  const body = req.body;

  if (!body) {
    return res.status(500).json([]);
  }

  try {
    if (!id) throw new Error('Id is required');

    const clinicHistory = await updateClinicHistory(body, id);
    return res.status(200).json(clinicHistory);
  } catch (error) {
    return res.status(500).json({});
  }
};

const get = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const id = req.query?.slug as string;

  try {
    if (!id) throw new Error('Id is required');

    const clinicHistory = await getClinicHistoryById(id);
    return res.status(200).json(clinicHistory);
  } catch (error) {
    return res.status(500).json({});
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'GET') {
    return await get(req, res);
  }

  if (req.method === 'PUT') {
    return await put(req, res);
  }

  return res.status(500).json([]);
}
