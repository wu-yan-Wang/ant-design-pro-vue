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
        ref="tree"
        v-if="treeData.length"
        :tree-data="treeData"
        :AUTO
        checkable
        v-model="checkData"
        :checkStrictly="false"></a-tree>
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
      expandedKeys: [],
      autoExpandParent: true,
      roleId: ''
    }
  },
  methods: {
    roleAuth (record) {
      this.loading = true
      this.roleId = record.id
      getPermissionByRoleId({ id: record.id }).then(res => {
        const data = res.result.map(item => item.id)
        this.checkData = data
        this.expandedKeys = data
        treeList().then((res) => {
          this.treeData = res.result
        })
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
    },
    onExpand (expandedKeys) {
      console.log('onExpand', expandedKeys)
      // if not set autoExpandParent to false, if children expanded, parent can not collapse.
      // or, you can remove all expanded children keys.
      this.expandedKeys = expandedKeys
      this.autoExpandParent = false
    }
  },
  components: {
    ATree
  }
}
</script>

<style>

</style>
