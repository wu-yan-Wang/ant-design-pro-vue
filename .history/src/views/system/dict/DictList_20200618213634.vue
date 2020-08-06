<template>
  <a-table></a-table>
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
          title: '描述',
          dataIndex: 'dictDescribe'
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
