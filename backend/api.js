import axios from 'axios'

const getInstance = axios.create({

    baseURL: `https://ankitm.herokuapp.com/`

});
getInstance.defaults.headers.common['Authorization'] = 'Token 7f0198d42f1623bd7c8460dae32e4d5a858151a13473271f61d599e79bc8a1d0'
export default getInstance;