import { axios } from '@/utils/request'
import api from './api'

export function getList (params) {
  return axios.post(
    api.role.getRoleList,
   params
  )
}
