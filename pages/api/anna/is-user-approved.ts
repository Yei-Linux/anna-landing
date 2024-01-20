import type { NextApiRequest, NextApiResponse } from 'next';
import { verifyAnnaUserApproved } from '../../../back/services';

async function post(req: NextApiRequest, res: NextApiResponse<any>) {
  const body = req.body;

  if (!body) {
    return res.status(500).json({
      message: 'Empty Request',
    });
  }

  if (!body?.email) {
    return res.status(500).json({
      message: 'Invalid Request',
    });
  }

  try {
    const user = await verifyAnnaUserApproved(body?.email);
    return res.status(200).json({
      data: user,
      message: 'Response susscessfull',
      error: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: (error as Error).message,
    });
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'POST') {
    return await post(req, res);
  }

  return res.status(500).json([]);
}
