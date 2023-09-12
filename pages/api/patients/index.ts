import type { NextApiRequest, NextApiResponse } from 'next';
import { countPatients, getPatients } from '../../../back/services';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const range = req.query?.range as string;
  const sort = req.query?.sort as string;
  const filter = req.query?.filter as string;

  try {
    const rangeObj = JSON.parse(range);
    if (!rangeObj) throw new Error('Range is required');

    const filterObj = JSON.parse(filter);
    if (!filterObj) throw new Error('Filter is required');

    const [start, end] = rangeObj;
    const sizeByPage = end - start + 1;

    const search = filterObj?.q;

    const total = await countPatients();
    const users = await getPatients(start, sizeByPage, search);
    return res.status(200).setHeader('Content-Range', total).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json([]);
  }
}
