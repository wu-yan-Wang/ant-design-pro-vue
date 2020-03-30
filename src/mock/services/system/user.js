import Mock from 'mockjs2'
import { builder, getBody } from '../../util'
const totalCount = 5701

const serverList = (options) => {
  console.log(options)

  const parameters = getBody(options)

  const result = []
  const pageNo = parseInt(parameters.pageNo)
  const pageSize = parseInt(parameters.pageSize)
  const totalPage = Math.ceil(totalCount / pageSize)
  const key = (pageNo - 1) * pageSize
  const next = (pageNo >= totalPage ? (totalCount % pageSize) : pageSize) + 1

  for (let i = 1; i < next; i++) {
    const tmpKey = key + i
    result.push({
      key: tmpKey,
      id: tmpKey,
      name: Mock.mock('@String(张三李四王五,3,3)'),
      account: Mock.mock('@String(abcdefghijklmnopqrstuvwxyz,6,18)'),
      mobilePhone: Mock.mock('@integer(11)'),
      sex: Mock.mock('@String(男女,1)'),
      idCard: Mock.mock('@id'),
      callNo: Mock.mock('@integer(1, 999)'),
      status: Mock.mock('@integer(0, 3)'),
      updatedAt: Mock.mock('@datetime'),
      editable: false
    })
  }

  return builder({
    pageSize: pageSize,
    pageNo: pageNo,
    totalCount: totalCount,
    totalPage: totalPage,
    data: result
  })
}

Mock.mock(/\/system\/user\/list/, 'post', serverList)
