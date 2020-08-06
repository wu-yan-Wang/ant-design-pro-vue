import { axios } from '@/utils/request'
import api from './api'

export function getList (params) {
  return axios({
    url: api.role.getRoleList,
    method: 'post',
    data: params
  })
}
