// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Reminder = {
  id: number,
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Reminder>
) {
  res.status(200).json({ id: 0, name: "first reminder"})
}
