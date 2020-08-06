<template>
  <a-table :data="data" :columns="columns">
    <template #serial="text,record,index">
      <span>{{ index+1 }}</span>
    </template>
  </a-table>
</template>

<script>
import { MorePageSearch, STable } from '@/components'
import { pageList } from '@/api/system/dict'
export default {
  data () {
    return {
      data: parameter => pageList(parameter).then(res => res.result),
      columns: [
        {
          title: '#',
          scopedSlots: { customRender: 'serial' }
        },
        {
          title: '字典名称',
          dataIndex: 'dictLabel'
        },
        {
          title: '字典值',
          dataIndex: 'dictValue'
        },
        {
          title: '描述',
          dataIndex: 'dictDescribe'
        },
        {
          title: '排序',
          dataIndex: 'displayOrder'
        },
        {
          title: '操作',
          scopedSlots: { customRender: 'action' }
        }
      ]
    }
  },
  components: {
    MorePageSearch, STable
  }
}
</script>

<style>

</style>
