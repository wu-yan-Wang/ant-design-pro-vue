<template>
  <a-card>
    <div class="table-operator">
      <a-button type="primary" icon="plus" @click="$refs.addRole.addRole()">新建</a-button>
      <a-button type="danger" icon="delete">删除</a-button>
    </div>
    
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
      updateRole(record)
    },
    remove (record) {
      this.$confirm({ content: '确实删除吗？' }).then(() => {
        deleteRole(record)
      }).catch(() => {})
    }
  },
  components: {
    STable, PermissionCard, RoleAuth, AddRole
  }
}
</script>

<style>

</style>
