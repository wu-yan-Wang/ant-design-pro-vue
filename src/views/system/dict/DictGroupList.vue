<template>
  <a-card>
    <more-page-search>
      <a-col v-bind="col">
        <a-form-item label="编码">
          <a-input v-model="queryParam.groupCode"></a-input>
        </a-form-item>
      </a-col>
      <a-col v-bind="col">
        <a-form-item label="名称">
          <a-input v-model="queryParam.groupName"></a-input>
        </a-form-item>
      </a-col>
      <template #hide-ele>
        <a-col v-bind="col">
          <a-form-item label="描述">
            <a-input v-model="queryParam.groupDescribe"></a-input>
          </a-form-item>
        </a-col>
      </template>
      <template #table-btn>
        <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
        <a-button type="ghost" @click="()=>queryParam={}">
          重置
        </a-button>
      </template>
    </more-page-search>
    <div class="table-operator">
      <a-button type="primary" icon="plus" @click="$refs.create.create()">新增</a-button>
    </div>
    <s-table ref="table" :data="data" row-key="id" :columns="columns">
      <template #serial="text,record,index">
        <span>{{ index+1 }}</span>
      </template>
      <template #action="text,record">
        <a href="#" @click="$refs.dict.show(record)">字典配置</a>
        <a-divider type="vertical"></a-divider>
        <a href="#" @click="$refs.editor.editor(record)">编辑</a>
        <a-divider type="vertical"></a-divider>
        <a-popconfirm title="确定要删除吗？" @confirm="remove(record)">
          <a href="#">删除</a>
        </a-popconfirm>
      </template>
    </s-table>
    <create-dict-group ref="create" @ok="refresh()"></create-dict-group>
    <editor-dict-group ref="editor" @ok="refresh()"></editor-dict-group>
    <dict-list ref="dict"></dict-list>
  </a-card>
</template>

<script>
import { CreateDictGroup, EditorDictGroup } from './modules'
import DictList from '@/views/system/dict/DictList'
import { STable, MorePageSearch } from '@/components'
import { groupPageList, deleteDictGroup } from '@/api/system/dict'
export default {
  data () {
    return {
      col: this.$enum('row.col3'),
      data: parameter => groupPageList({ ...this.queryParam, ...parameter }).then((res) => res.result),
      queryParam: {},
      columns: [
        {
          title: '#',
          scopedSlots: { customRender: 'serial' }
        },
        {
          title: '编码',
          dataIndex: 'groupCode'
        },
        {
          title: '名称',
          dataIndex: 'groupName'
        },
        {
          title: '描述',
          dataIndex: 'groupDescribe'
        }, {
          title: '操作',
          scopedSlots: { customRender: 'action' }
        }
      ]
    }
  },
  methods: {
    refresh () {
      this.$refs.table.refresh(true)
    },
    remove (record) {
      deleteDictGroup(record).then(() => {
        this.$message.success('删除成功！')
        this.refresh()
      })
    }
  },
  components: {
    STable, MorePageSearch, CreateDictGroup, EditorDictGroup, DictList
  }
}
</script>

<style>

</style>
