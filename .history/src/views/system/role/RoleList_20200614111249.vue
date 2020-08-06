<template>
  <a-card>

    <div class="table-operator">
      <a-button type="primary" icon="plus" @click="$refs.addRole.addRole()">新建</a-button>
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
        <a @click="$refs.editRole.editRole(record)">编辑</a>
        <a-divider type="vertical" />
        <a @click="remove(record)">删除</a>
      </template>
    </s-table>
    <role-auth ref="auth"></role-auth>
    <add-role ref="addRole" @ok="$refs.roleList.refresh()"></add-role>
    <edit-role ref="editRole" @ok="$refs.roleList.refresh()"></edit-role>
  </a-card>
</template>

<script>
import { STable } from '@/components'
import { pageList, deleteRole } from '@/api/system/role'
import { PermissionCard, RoleAuth, AddRole, EditRole } from './modules/index'
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
      }],
      searchCol: this.$enum('row.col2')
    }
  },
  methods: {
    remove (record) {
      this.$confirm({ content: '确实删除吗？',
        onOk: () => {
          deleteRole(record).then(() => {
            this.$message.success('删除成功！')
            this.$refs.roleList.refresh()
          })
        }
      })
    }
  },
  components: {
    STable, PermissionCard, RoleAuth, AddRole, EditRole
  }
}
</script>

<style>

</style>
