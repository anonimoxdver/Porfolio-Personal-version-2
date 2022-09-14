import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database'
import { Data } from '../../../models'
import { SeedProyecs } from '../../../Data/dataTecnologies';

type Data = 
|  { message: string }
|  {resp: SeedProyecs[]}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'GET':
            return getDataFromMongo( req, res)
           
        default:
            return res.status(200).json({ message: 'Example' })
            
    }
    
}
 
const getDataFromMongo = async(req: NextApiRequest, res: NextApiResponse<Data>) => {


    await db.connect();

    const resp = await Data.find()

    await db.disconnect();

    return res.status(200).json({ resp })
}