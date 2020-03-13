import Mock from 'mockjs2'
import { builder, getBody } from '../../util'

const getDictByType = function (options) {
  const { dictType } = getBody(options)
  const data = {
    sex: [{
      dictLabel: '男',
      dictValue: '0'
    }, {
      dictLabel: '女',
      dictValue: '1'
    }]
  }
  return builder(data[dictType])
}

Mock.mock(/\/system\/dict\/getDictByType/, 'post', getDictByType)
