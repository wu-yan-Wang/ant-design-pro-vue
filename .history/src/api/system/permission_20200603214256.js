import { axios } from '@/utils/request'
import api from './api'
export list(param){
  return axios.post(api.permission.list)
}