import { axios } from '@/utils/request'
import api from './api'

export function list (parameter) {
  return axios.post(api.permission.list, parameter)
}

export function treeList(parameter){
  return axios.post(api.permission.treeList)
}