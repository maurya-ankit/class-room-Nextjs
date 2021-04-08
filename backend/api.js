import axios from 'axios'
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const getInstance = axios.create({

    // baseURL: `https://ankitm.herokuapp.com/`
    baseURL: `${process.env.apiBaseUrl}/`

});
getInstance.defaults.headers.common['Authorization'] = `Token ${cookies.get("authToken")}`
export default getInstance;