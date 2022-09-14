import { db } from "./";

import { Data } from "../models";

export const getAllProyectsPath = async() => {


    await db.connect();
    const paths = await Data.find().select('pahtName').lean();
    await db.disconnect();

    return paths;
}

export const getProyectByPath = async ( path:string) => {
    
    path = path.toString().toLowerCase();

    await db.connect();
    const proyect = await Data.find({
        $text: { $search: path }
    })
    .lean();

    await db.disconnect();




    return JSON.parse(JSON.stringify(proyect)) ;
}