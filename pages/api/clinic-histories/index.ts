import type { NextApiRequest, NextApiResponse } from 'next';
import {
  countClinicHistories,
  createClinicHistory,
  getClinicHistoriesByUserId,
} from '../../../back/services';

const post = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const body = req.body;

  if (!body) {
    return res.status(500).json([]);
  }

  try {
    const clinicHistoryCreated = await createClinicHistory(body);
    return res.status(201).json(clinicHistoryCreated);
  } catch (error) {
    return res.status(500).json([]);
  }
};

const get = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const range = req.query?.range as string;
  const sort = req.query?.sort as string;
  const filter = req.query?.filter as string;

  try {
    const rangeObj = JSON.parse(range);
    if (!rangeObj) throw new Error('Range is required');

    const filterObj = JSON.parse(filter);
    if (!filterObj?.userId) throw new Error('UserId is required');

    const [start, end] = rangeObj;
    const sizeByPage = end - start + 1;

    const total = await countClinicHistories(filterObj?.userId);
    const diagnosisPaginated = await getClinicHistoriesByUserId(
      start,
      sizeByPage,
      filterObj?.userId
    );
    return res
      .status(201)
      .setHeader('Content-Range', total)
      .json(diagnosisPaginated);
  } catch (error) {
    console.log('test', error);
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
