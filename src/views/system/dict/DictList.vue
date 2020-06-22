<template>
  <a-drawer :width="500" title="字典配置" :visible="visible" placement="right" @close="cancel()">
    <div class="content">
      <div class="table-operator">
        <a-button type="primary" icon="plus" @click="$refs.createDict.create()">新增</a-button>
      </div>
      <a-table row-key="id" ref="table" :data-source="data" :columns="columns">
        <template #serial="text,record,index">
          <span>{{ index+1 }}</span>
        </template>
        <template #action="text,record">
          <a href="javascript:void(0)" @click="$refs.editorDict.editor(record)">编辑</a>
        </template>
      </a-table>
      <create-dict :dict-group-id="dictGroupId" ref="createDict" @ok="loadData()"></create-dict>
      <editor-dict ref="editorDict" @ok="loadData()"></editor-dict>
    </div>

  </a-drawer>
</template>

<script>
import { CreateDict, EditorDict } from './modules'
import { pageList } from '@/api/system/dict'
export default {
  data () {
    return {
      dictGroupId: '',
      visible: false,
      data: [],
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
    show (record) {
      this.dictGroupId = record.id
      this.loadData()
      this.visible = true
    },
    cancel () {
      this.visible = false
    },
    loadData () {
      pageList({ dictGroupId: this.dictGroupId }).then(res => {
        this.data = res.result.records
      })
    }
  },
  components: {
    CreateDict, EditorDict
  }
}
</script>

<style>

</style>
