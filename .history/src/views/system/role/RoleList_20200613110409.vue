<template>
  <a-card>
    <div class="table-operator">
      <a-button type="primary" icon="plus" @click="$refs.addRole.addRole()">新建</a-button>
      <a-button type="danger" icon="delete">删除</a-button>
    </div>
    <s-table ref="roleList" :data="data" rowKey="id" :columns="columns" >
      <template #serial="text,record,index">
        <span>{{ index+1 }}</span>
      </template>
      <template #expandedRowRender="{id}">
        <permission-card :role-id="id"></permission-card>
      </template>
      <template #action="text,record">
        <a @click="$refs.auth.roleAuth(record)">授权</a>
        <a-divider type="vertical" />
        <a @click="edit(record)">编辑</a>
        <a-divider type="vertical" />
        <a @click="deleteRole(record)">删除</a>
      </template>
    </s-table>
    <role-auth ref="auth"></role-auth>
    <add-role ref="addRole" @ok="$refs.roleList.refresh()"></add-role>
  </a-card>
</template>

<script>
import { STable } from '@/components'
import { pageList, deleteRole, updateRole } from '@/api/system/role'
import { PermissionCard, RoleAuth, AddRole } from './modules/index'
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
    remove (record) {
de
    }
  },
  components: {
    STable, PermissionCard, RoleAuth, AddRole
  }
}
</script>

<style>

</style>
