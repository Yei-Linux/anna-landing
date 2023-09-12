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
    res.status(200).json({});
  } catch (error) {
    res.status(500).json({});
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
    res.status(200).json(diagnosis);
  } catch (error) {
    res.status(500).json({});
  }
};

const get = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const id = req.query?.slug as string;

  try {
    if (!id) throw new Error('Id is required');

    const diagnosis = await getDiagnosisById(id);
    res.status(200).json(diagnosis);
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

  if (req.method === 'DELETE') {
    await deleteOne(req, res);
    return;
  }

  res.status(500).json([]);
}