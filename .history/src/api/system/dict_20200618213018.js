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
 * 
 * @param {Object} param 
 */
export function pageList (param) {
  return axios.post(api.dict.pageList, param)
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
