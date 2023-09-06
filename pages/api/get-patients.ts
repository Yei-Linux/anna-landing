import type { NextApiRequest, NextApiResponse } from 'next';
import { getUsers } from '../../back/services';

type Data = {
  users: any[];
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const users = await getUsers();
    const response = { users };
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      users: [],
      error: (error as Error).message,
    });
  }
}
