import { builder } from '@/mock/util'
import Mock from 'mockjs2'
const roleList = () => {
  const list = []
  for (let i = 0; i < 10; i++) {
    list.push({
      key: i.toString(),
      title: `content${i + 1}`,
      description: `description of content${i + 1}`,
      disabled: i % 4 === 0
    })
  }
  return builder(list)
}
Mock.mock(/\/system\/role\/list/, 'post', roleList)
