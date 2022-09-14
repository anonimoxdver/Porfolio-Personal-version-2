import type { NextApiRequest, NextApiResponse } from 'next'
import { data } from '../../../Data';
import { db } from '../../../database';
import { Data } from '../../../models';

type Data = { message: string }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    if (  process.env.NODE_ENV === 'production'){
        return res.status(401).json({ message: 'No tiene acceso a este API'});
    }

    try {
         await db.connect();

    await Data.deleteMany();
    await Data.insertMany( data.ProyectsData );

    await db.disconnect();


    } catch (error) {
        res.status(200).json({ message: `error ${error}` });
    }
   

    res.status(200).json({ message: 'Proceso realizado correctamente' });
}