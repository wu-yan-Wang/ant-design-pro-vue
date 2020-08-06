import { axios } from '@/utils/request'
import api from './api'

/**
 * 
 * @param {} params 
 */
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
