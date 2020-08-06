<template>
  <s-table
    :columns="columns"
    :data="loadData"
  >
    <span #serial="text, record,index">{{ index+1 }}</span>
  </s-table>
</template>

<script>
import { STable } from '@/components'
import { list } from '@/api/system/permission'
export default {
  data () {
    return {
      columns: [
        {
          title: '#',
          scopedSlots: { customRender: 'serial' }
        },
        {
          title: '权限名称',
          dataIndex: 'permissionName'
        },
        {
          title: '权限编码',
          dataIndex: 'permissionCode'
        },
        {
          title: '权限url',
          dataIndex: 'permissionUrl'
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
      queryParam: {},
      loadData: parameter => {
        return list(Object.assign(parameter, this.queryParam))
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
