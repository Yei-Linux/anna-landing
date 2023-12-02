import type { NextApiRequest, NextApiResponse } from 'next';
import { getAnnaOptions } from '../../../back/services/options';

const get = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  try {
    const options = await getAnnaOptions();
    return res.status(200).json(options);
  } catch (error) {
    return res.status(500).json([]);
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'GET') {
    return await get(req, res);
  }

  return res.status(500).json([]);
}
