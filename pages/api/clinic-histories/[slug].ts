import type { NextApiRequest, NextApiResponse } from 'next';
import {
  getClinicHistoryById,
  updateClinicHistory,
} from '../../../back/services';

const put = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const id = req.query?.slug as string;
  const body = req.body;

  if (!body) {
    res.status(500).json([]);
    return;
  }

  try {
    if (!id) throw new Error('Id is required');

    const clinicHistory = await updateClinicHistory(body, id);
    res.status(200).json(clinicHistory);
  } catch (error) {
    res.status(500).json({});
  }
};

const get = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const id = req.query?.slug as string;

  try {
    if (!id) throw new Error('Id is required');

    const clinicHistory = await getClinicHistoryById(id);
    res.status(200).json(clinicHistory);
  } catch (error) {
    res.status(500).json({});
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'GET') {
    await get(req, res);
    return;
  }

  if (req.method === 'PUT') {
    await put(req, res);
    return;
  }

  res.status(500).json([]);
}
