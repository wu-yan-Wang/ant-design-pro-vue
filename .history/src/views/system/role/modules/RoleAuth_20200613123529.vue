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
      checkData: [],
      roleId: ''
    }
  },
  methods: {
    roleAuth (record) {
      if (this.treeData.length > 0) {
        this.loading = true
        this.roleId = record.id
        getPermissionByRoleId({ id: record.id }).then(res => {
          this.checkData = res.result.map(item => item.id)
        }).finally(() => {
          this.loading = false
        })
        this.visible = true
      } else {
        this.$message.warning('树还未加载完成,请稍后再操作...')
      }
    },
    cancel () {
      this.visible = false
    },
    sumbit () {
      if (this.checkData.length === 0) {
        this.$message.warning('请选择要添加的菜单或权限！')
        return false
      }
      this.loading = true
      this.confirmLoading = true
      const params = this.checkData.map(item => ({ roleId: this.roleId, permissionId: item }))
      addRolePermission(params).then(() => {
        this.$message.success('添加成功！')
        this.cancel()
      }).finally(() => {
        this.loading = false
        this.confirmLoading = false
      })
    }
  },
  created () {
    treeList().then((res) => {
      this.treeData = res.result
    })
  },
  components: {
    ATree
  }
}
</script>

<style>

</style>
