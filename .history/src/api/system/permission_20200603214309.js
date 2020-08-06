import { axios } from '@/utils/request'
import api from './api'

export function list (param) {
  return axios.post(api.permission.list,par)
}
