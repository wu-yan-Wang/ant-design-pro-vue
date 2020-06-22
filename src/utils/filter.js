import Vue from 'vue'
import store from '@/store'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

Vue.filter('NumberFormat', function (value) {
  if (!value) {
    return '0'
  }
  const intPartFormat = value.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') // 将整数部分逢三一断
  return intPartFormat
})

Vue.filter('dict', function (value, groupCode) {
  let dictLabel = ''
  if (!groupCode) {
    console.error('filter[dict],缺少必须的入参！')
    return dictLabel
  }
  if (!value) {
    return dictLabel
  }
  const dictCache = store.getters['dict/dictCache']
  if (Array.isArray(dictCache)) {
    dictCache.forEach(item => {
      if (item.groupCode === groupCode) {
        Array.isArray(item.children) && (item.children.forEach(child => {
          if (child.dictValue === value) {
            dictLabel = child.dictLabel
          }
        }))
      }
    })
  }
  return dictLabel
})

Vue.filter('dayjs', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})

Vue.filter('moment', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})
