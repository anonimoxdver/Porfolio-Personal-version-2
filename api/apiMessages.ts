import axios from 'axios';



const apiMessages = axios.create({
    baseURL: '/api'
});


export default apiMessages;
