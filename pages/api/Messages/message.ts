import type { NextApiRequest, NextApiResponse } from 'next';


import { db } from '../../../database';
import { Message } from '../../../models';
import { validations } from '../../../utils';

type Data = 
| { message: string }
| {
    message: {
        correo: string;
        phone: string;   
    }
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    
    switch( req.method ) {
        case 'POST':
            return registerUser(req, res)

        default:
            res.status(400).json({
                message: 'Bad request'
            })
    }
}

const registerUser = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
    
    const { email = '', message = '', name = '' } = req.body as { email: string, message: string, name: string };

    if ( message.length < 1 ) {
        return res.status(400).json({
            message: 'El mensaje no puede ser tan cor'
        });
    }

    if ( name.length < 2 ) {
        return res.status(400).json({
            message: 'El nombre debe de ser de 2 caracteres'
        });
    }
    
    if ( !validations.isValidEmail( email ) ) {
        return res.status(400).json({
            message: 'El correo no tiene formato de correo'
        });
    }
    
    
    await db.connect();
    const postMessage = await Message.findOne({ email });

    if ( postMessage ) {
        return res.status(400).json({
            message:'No puede usar ese correo'
        })
    }

    const newMessage = new Message({
        email: email.toLocaleLowerCase(),
        message,
        name,
    });

    try {
        await newMessage.save({ validateBeforeSave: true });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Revisar logs del servidor'
        })
    }
   




    return res.status(200).json({
        message: {
            correo: 'david.contacto031@gmail.com',
            phone: '+52 2212117556'
        }
    })


}