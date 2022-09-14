import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database'
import { Data } from '../../../models'
import { SeedProyecs } from '../../../Data/dataTecnologies';

type Data = 
|  { message : string }
|  { proyect : SeedProyecs[] }

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'GET':
            return getProyectFromMongo( req, res)
           
        default:
            return res.status(200).json({ message: 'Example' })
            
    }
    
}
 
const getProyectFromMongo = async(req: NextApiRequest, res: NextApiResponse<Data>) => {


    await db.connect();

    const { q } = req.query;
    const proyect = await Data.findOne({ q }).lean();

    await db.disconnect();


    if( !proyect ) {
        return res.status(404).json({
            message: 'Producto no encontrado'
        })
    }

    return res.status(200).json({ proyect })
}