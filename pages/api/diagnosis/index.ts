import type { NextApiRequest, NextApiResponse } from 'next';
import {
  countDiagnosis,
  createNewDiagnosis,
  getDiagnosis,
} from '../../../back/services';

const post = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const body = req.body;

  if (!body) {
    res.status(500).json([]);
    return;
  }

  try {
    const diagnosisCreated = await createNewDiagnosis(body);
    res.status(201).json(diagnosisCreated);
  } catch (error) {
    res.status(500).json([]);
  } finally {
    return;
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

    const total = await countDiagnosis(filterObj?.userId);
    const diagnosisPaginated = await getDiagnosis(
      start,
      sizeByPage,
      filterObj?.userId
    );
    res.status(201).setHeader('Content-Range', total).json(diagnosisPaginated);
  } catch (error) {
    console.log('test', error);
    res.status(500).json([]);
  } finally {
    return;
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'POST') {
    await post(req, res);
    return;
  }

  if (req.method === 'GET') {
    await get(req, res);
    return;
  }

  res.status(500).json([]);
}
