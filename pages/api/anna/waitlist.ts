import type { NextApiRequest, NextApiResponse } from 'next';
import { joinToWaitlist } from '../../../back/services/waitlist.service';
import {
  sendEmaiWaitlist,
  sendEmaiWaitlistForAdmin,
} from '../../../back/services/send-email.service';

async function post(req: NextApiRequest, res: NextApiResponse<any>) {
  const body = req.body;

  if (!body) {
    return res.status(500).json({
      message: 'Empty Request',
    });
  }

  try {
    const message = await joinToWaitlist(body);
    sendEmaiWaitlist(body.email);
    sendEmaiWaitlistForAdmin(body.email);
    return res.status(200).json({
      data: body,
      message,
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
