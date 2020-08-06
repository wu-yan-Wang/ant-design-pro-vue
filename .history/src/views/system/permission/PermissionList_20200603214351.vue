<template>
  <s-table
    :columns="columns"
    :data
  ></s-table>
</template>

<script>
import { STable } from '@/components'
import {list} from '@/'
export default {
  data () {
    return {
      columns: [
        {
          title: '#',
          scopedSlots: { customRender: 'serial' }
        },
        {
          title: '姓名',
          dataIndex: 'name'
        },
        {
          title: '账号',
          dataIndex: 'account'
        },
        {
          title: '手机号',
          dataIndex: 'mobilePhone'
        },
        {
          title: '身份证',
          dataIndex: 'idCard'
        },
        {
          title: '性别',
          dataIndex: 'sex'
        },
        {
          title: '状态',
          dataIndex: 'status',
          scopedSlots: { customRender: 'status' }
        },
        {
          title: '更新时间',
          dataIndex: 'updatedAt',
          sorter: true
        },
        {
          title: '操作',
          dataIndex: 'action',
          width: '150px',
          scopedSlots: { customRender: 'action' }
        }
      ],
      loadData: parameter => {
        return getUserList(Object.assign(parameter, this.queryParam))
          .then(res => {
            return res.result
          })
      }
    }
  },
  components: {
    STable
  }
}
</script>

<style>

</style>
