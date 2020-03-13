import { axios } from '@/utils/request'
import api from './api'

export function getDictType (parameter) {
  return axios({
    url: api.dict.getDictType,
    method: 'post',
    data: parameter
  })
}
