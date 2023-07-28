import axios from 'axios'

const ajax = axios.create({
    baseURL: '',
    timeout: 10000,
})

function requestToken(options) {
    const token = window.localStorage.getItem('token')
    const Authorization = 'Bearer ' + token

    return ajax({
        ...options,
        headers: {'Authorization': Authorization},
    })
}

export default requestToken;