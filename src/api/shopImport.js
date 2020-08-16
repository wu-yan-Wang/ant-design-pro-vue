import {
  axios
} from '@/utils/request'

export function upload (parameter) {
  return axios.post('/importExcel/import', parameter)
}

export function getImportMsgByBatchNo (parameter) {
  console.log(parameter)
  return axios.get(`importExcel/getImportMsgByBatchNo?batchNo=${parameter.batchNo}&current=${parameter.current}&size=${parameter.size}&total=0`)
}

export function getStocks (parameter) {
  return axios.post('/importExcel/getStocks', parameter)
}
