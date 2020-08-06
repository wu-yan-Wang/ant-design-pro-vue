<template>
  <a-card>
    <!-- <s-table
      :columns="columns"
      :data="loadData"
    >
      <template #serial="text, record,index"><span>{{ index+1 }}</span></template>
    </s-table> -->
  </a-card>
</template>

<script>
import { STable } from '@/components'
import { list } from '@/api/system/permission'
import Tree from './modules/Tree'
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
        { title: '权限图标',
          dataIndex: 'permissionIcon'
        },
        {
          title: '权限url',
          dataIndex: 'permissionUrl'
        },
        {
          title: '组件',
          dataIndex: 'component'
        },
        {
          title: '重定向的路径',
          dataIndex: 'redirect'
        },
        {
          title: '权限',
          dataIndex: 'permission'
        },
        {
          title: '状态',
          dataIndex: 'status',
          scopedSlots: { customRender: 'status' }
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
    STable, Tree
  }
}
</script>

<style>

</style>
