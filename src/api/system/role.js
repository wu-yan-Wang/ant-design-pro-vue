import { axios } from '@/utils/request'
import api from './api'

/**
 * 获取所有的角色
 * @param {*} params
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
  return axios.post(api.role.haveRole)
}

/**
 * 添加用户角色
 * @param {Array} params
 */
export function addUserRole (params) {
  return axios.post(api.role.addUserRole, params)
}

/**
 * 分页查询
 * @param {Object} params
 */
export function pageList (params) {
  return axios.post(api.role.pageList, params)
}

/**
 * 更新角色
 * @param {Object} params
 */
export function updateRole (params) {
  return axios.post(api.role.updateRole, params)
}

/**
 * 删除角色
 * @param {Object}} params
 */
export function deleteRole (params) {
  return axios.post(api.role.deleteRole, params)
}
