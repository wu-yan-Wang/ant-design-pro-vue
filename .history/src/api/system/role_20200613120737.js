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

export function getOne(params) {
  return axios.post(api)
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
 * 添加角色
 * @param {Object} params
 */
export function addRole (params) {
  return axios.post(api.role.addRole, params)
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

/**
 * 根据角色id获取菜单集合
 * @param {Object} params
 */
export function getPermissionByRoleId (params) {
  return axios.post(api.role.getPermissionByRoleId, params)
}

/**
 * 根据角色id获取菜单标签
 * @param {Object} params
 */
export function getTagPermissionByRoleId (params) {
  return axios.post(api.role.getTagPermissionByRoleId, params)
}

/**
 * 添加角色和权限关系
 * @param {Array} params
 */
export function addRolePermission (params) {
  return axios.post(api.role.addRolePermission, params)
}
