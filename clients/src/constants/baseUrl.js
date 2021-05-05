import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.URL_BACKEND_HEROKU
})

export default instance
