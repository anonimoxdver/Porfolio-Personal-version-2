import { messagesApi } from '../api';

export const getProyectBypath = async( path : string ) => {

    try {

        const { data } = await messagesApi.get(`/data/getProyect/?q=${path}`);

        return data

    } catch (error) {
        
        return null
        
    }
    


}
