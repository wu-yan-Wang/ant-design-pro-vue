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
 * 获取字典组分页列表
 * @param {Object}} parameter
 */
export function groupPageList (parameter) {
  return axios.post(api.dict.groupPageList, parameter)
}
