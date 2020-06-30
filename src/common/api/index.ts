import axios from 'axios'

const onFullfiled = (response: any) => {
  return response.data
}

const onRejected = (error: any) => {
  return Promise.reject(error.response)
}

const HTTP = axios.create({
  baseURL: 'https://jsonbox.io/',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://jsonbox.io/',
  },
})

HTTP.interceptors.response.use(onFullfiled, onRejected)

export default HTTP
