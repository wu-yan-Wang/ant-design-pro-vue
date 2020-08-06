import { axios } from '@/utils/request'
import api from './api'

export function getUserList (parameter) {
  return axios({
    url: api.user.getUserList,
    method: 'post',
    data: parameter
  })
}

export function add (parameter) {
  return axios.post(api.user.add, parameter)
}

export function remove (parameter) {
  return axios.post(api.user.delete, parameter)
}

export function edit (parameter) {
  return axios.post(api.user.add, parameter)
}
