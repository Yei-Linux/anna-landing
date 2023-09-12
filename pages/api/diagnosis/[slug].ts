import type { NextApiRequest, NextApiResponse } from 'next';
import {
  deleteDiagnosisById,
  getDiagnosisById,
  updateDiagnosisById,
} from '../../../back/services';

const deleteOne = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const id = req.query?.slug as string;

  try {
    if (!id) throw new Error('Id is required');

    await deleteDiagnosisById(id);
    return res.status(200).json({});
  } catch (error) {
    return res.status(500).json({});
  }
};

const put = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const id = req.query?.slug as string;
  const body = req.body;

  if (!body) {
    res.status(500).json([]);
    return;
  }

  try {
    if (!id) throw new Error('Id is required');

    const diagnosis = await updateDiagnosisById(body, id);
    return res.status(200).json(diagnosis);
  } catch (error) {
    return res.status(500).json({});
  }
};

const get = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const id = req.query?.slug as string;

  try {
    if (!id) throw new Error('Id is required');

    const diagnosis = await getDiagnosisById(id);
    return res.status(200).json(diagnosis);
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

  if (req.method === 'DELETE') {
    return await deleteOne(req, res);
  }

  return res.status(500).json([]);
}
