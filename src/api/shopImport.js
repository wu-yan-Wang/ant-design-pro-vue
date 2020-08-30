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

/**
 * 激活
 * @param {*} parameter
 */
export function activeStocks (parameter) {
  return axios.post('/importExcel/activeStocks?id=' + parameter.id)
}

/**
 * 暂停
 * @param {*} parameter
 */
export function pauseStocks (parameter) {
  return axios.post('/importExcel/pauseStocks?id=' + parameter.id)
}

/**
 * 重启
 * @param {*} parameter
 */
export function restartStocks (parameter) {
  return axios.post('/importExcel/restartStocks?id=' + parameter.id)
}

/**
 * 开启定位
 * @param {*}
 */
export function updateIsOpenGps (params) {
  console.log(params)
  return axios.post('/userReceive/updateIsOpenGps', params)
};
