import { axios } from '@/utils/request'
import api from './api'

export function getDictType (parameter) {
  return axios({
    url: api.dict.getDictType,
    method: 'post',
    data: parameter
  })
}

/**
 * 字典分页
 * @param {Object} param
 */
export function pageList (param) {
  return axios.post(api.dict.pageList, param)
}

/**
 * 添加
 * @param {Object} params
 */
export function add (params) {
  return axios.post(api.dict.add, params)
}

/**
 * 修改
 * @param {Object} params
 */
export function update (params) {
  return axios.post(api.dict.update, params)
}

/**
 * 
 * @param {Object} params 
 */
export function remove (params) {
  return axios.post(api.dict.remove, params)
}

/**
 * 获取字典组分页列表
 * @param {Object}} parameter
 */
export function groupPageList (parameter) {
  return axios.post(api.dict.groupPageList, parameter)
}

/**
 * 获取详情
 * @param {Object} parameter
 */
export function getDictGroupOne (parameter) {
  return axios.post(api.dict.getDictGroupOne, parameter)
}

/**
 * 添加字典组
 * @param {Object} parameter
 */
export function addDictGroup (parameter) {
  return axios.post(api.dict.addGroupDict, parameter)
}

/**
 * 更新字典组
 * @param {Object} parameter
 */
export function updateDictGroup (parameter) {
  return axios.post(api.dict.updateGroupDict, parameter)
}

/**
 * 删除字典组
 * @param {Object} parameter
 */
export function deleteDictGroup (parameter) {
  return axios.post(api.dict.deleteGroupDict, parameter)
}
