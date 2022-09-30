// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import { Session } from "next-auth";

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Session>
) {
  const session = await getSession({req})
  if(!session){
    res.status(401)
    return
  }
  res.status(200).json(session)

}
