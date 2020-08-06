import { axios } from '@/utils/request'
import api from './api'

export function getList (params) {
  return axios.post(
    url: api.role.getRoleList,
    data: params
  )
}
