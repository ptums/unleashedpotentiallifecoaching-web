import type { NextApiRequest, NextApiResponse } from 'next'

interface Props {
  name: string;
  email: string;
  date: string;
}

const bookTimeHandler = (data: Props) => {
  return data;
}

export default (req: NextApiRequest, res: NextApiResponse<Props>) => {
  try {
    if(req.method === "POST") {
      
    }
  } catch(err) {
    console.error(err)    
  }
}