import { axios } from '@/utils/request'
import api from './api'

export function list (parameter) {
  return axios.post(api.permission.list, parameter)
}

export function treeList () {
  return axios.post(api.permission.treeList)
}

export function getOneById (parameter) {
  return axios.post(api.permission.getOneById, parameter)
}

export function add (parameter) {
  return axios.post(api.permission.add, parameter)
}

export function update(parameter){
  return axios.post(api.permission.update,)
}