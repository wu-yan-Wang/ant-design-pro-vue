<template>
  <a-card>
    <div class="table-operator">
      <a-button type="primary" icon="plus">新建</a-button>
      <a-button type="danger" icon="delete">删除</a-button>
    </div>
    <s-table :data="data" rowKey="id" :columns="columns" >
      <template #serial="text,record,index">
        <span>{{ index+1 }}</span>
      </template>
      <template #expandedRowRender="{id}">
        <div>
          <permission-card :role-id="id"></permission-card>
        </div>
      </template>
      <template #action="text,record">
        <a @click="edit(record)">编辑</a>
      </template>
    </s-table>
  </a-card>
</template>

<script>
import { STable } from '@/components'
import { pageList } from '@/api/system/role'
import PermissionCard from '@/views/system/role/modules/PermissionCard'
export default {
  data () {
    return {
      data: parameter => pageList(parameter).then(res => res.result),
      columns: [{
        title: '#',
        scopedSlots: { customRender: 'serial' }
      }, {
        title: '角色名称',
        dataIndex: 'roleName'
      }, {
        title: '角色编码',
        dataIndex: 'roleCode'
      }, {
        title: '状态',
        dataIndex: 'status'
      }, {
        title: '操作',
        scopedSlots: { customRender: 'action' }
      }]
    }
  },
  methods: {
    edit (record) {
      console.log(record)
    },
    onSelectChange (e) {
      console.log(e)
      this.selectedRowKeys = e
    }
  },
  components: {
    STable, PermissionCard
  }
}
</script>

<style>

</style>
