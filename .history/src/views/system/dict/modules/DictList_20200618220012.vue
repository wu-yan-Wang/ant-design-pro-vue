<template>
  <a-drawer :width="500" title="字典配置" :visible="visible" placement="right" @close="cancel()">
    <a-card></a-card>
  </a-drawer>
</template>

<script>
import { MorePageSearch, STable } from '@/components'
import { pageList } from '@/api/system/dict'
export default {
  data () {
    return {
      visible: false,
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
  methods: {
    show () {
      this.visible = true
    },
    cancel () {
      this.visible = false
    }
  },
  components: {
    MorePageSearch, STable
  }
}
</script>

<style>

</style>
