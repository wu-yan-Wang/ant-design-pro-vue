import { axios } from '@/utils/request'

export function list (parameter) {
  return axios.post('/payment-user/list', parameter)
}

export function upload (parameter) {
  return axios.post('/payment-user/importExcel', parameter)
}
