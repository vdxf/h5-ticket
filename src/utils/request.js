import axios from 'axios'
const ajax = axios.create({
    baseURL: '',
    timeout: 10000,
})


export default ajax;