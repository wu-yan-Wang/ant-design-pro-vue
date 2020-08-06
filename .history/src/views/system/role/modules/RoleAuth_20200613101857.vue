<template>
  <a-modal
    :width="$enum('modal.width')"
    :visible="visible"
    title="角色赋权"
    :confirm-loading="confirmLoading"
    @ok="sumbit"
    @cancel="cancel">
    <a-spin :spinning="loading">
      <a-tree
        v-model="checkData"
        :checkStrictly="false"
        :checkable="true"
        :tree-data="treeData"></a-tree>
    </a-spin>
  </a-modal>
</template>

<script>
import { Tree as ATree } from 'ant-design-vue'
import { treeList } from '@/api/system/permission'
import { getPermissionByRoleId, addRolePermission } from '@/api/system/role'
export default {
  name: 'RoleAuth',
  data () {
    return {
      visible: false,
      loading: false,
      confirmLoading: false,
      treeData: [],
      checkData: []
    }
  },
  methods: {
    roleAuth (record) {
      this.loading = true
      getPermissionByRoleId({ id: record.id }).then(res => {
        this.checkData = res.result.map(item => item.id)
      }).finally(() => {
        this.loading = false
      })
      this.visible = true
    },
    cancel () {
      this.visible = false
    },
    sumbit () {
      if (this.checkData.length === 0) {
        this.$message.warning('请选择要添加的菜单或权限！')
      }
      this.loading = true
      this.confirmLoading = true
      const params = this.treeData.map(item => ({ roleId: this.roleId, permissionId: item }))
      addRolePermission(params).then(() => {
        this.$message.success('添加成功！')
      }).finally(() => {
        this.loading = false
        this.confirmLoading = false
      })
    }
  },
  created () {
    this.loading = true
    treeList().then((res) => {
      this.treeData = res.result
    }).finally(() => {
      this.loading = false
    })
  },
  components: {
    ATree
  }
}
</script>

<style>

</style>
