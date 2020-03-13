import { axios } from '@/utils/request'
import api from './api'

export function getUserList (parameter) {
  return axios({
    url: api.user.getUserList,
    method: 'post',
    data: parameter
  })
}
