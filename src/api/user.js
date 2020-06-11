import axios from './base'

export default {
  login (data) {
    return axios.post('/user/login', data)
  }
}
