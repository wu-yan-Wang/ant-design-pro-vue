import { axios } from '@/utils/request'
import api from './api'

export function getList (params) {
  return axios.post(
    api.role.getRoleList,
    params || {}
  )
}

/**
 * 获取拥有的角色
 */
export function haveRole () {
  return axios.post(haveRole)
}
