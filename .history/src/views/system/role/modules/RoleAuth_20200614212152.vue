<template>
  <a-modal
    :width="$enum('modal.width')"
    :visible="visible"
    title="角色赋权"
    :confirm-loading="confirmLoading"
    @ok="sumbit"
    @cancel="cancel">
    <a-card><a-divider>菜单树目前还不能支持选择父级的时候子级全选,选择子级的时候父级半选,现在只能支持要么全选,要么半选。</a-divider></a-card>
    <a-spin :spinning="loading">
      <a-tree
        ref="tree"
        v-if="treeData.length"
        :tree-data="treeData"
        checkable
        :default-checked-keys="checkData"
        @check="treeCheck"
        :checkStrictly="true"
        :auto-expand-parent="autoExpandParent"
        :expanded-keys="expandedKeys"
        @expand="onExpand"></a-tree>
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
      // 用于保存
      this.roleId = record.id
      // 获取角色下的权限
      getPermissionByRoleId({ id: record.id }).then(res => {
        const data = res.result.map(item => item.id)
        this.checkData = data
        this.expandedKeys = data
        // 获取树数据
        return treeList().then((res) => {
          this.treeData = res.result
          this.visible = true
        })
      }).finally(() => {
        this.loading = false
      })
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
      this.expandedKeys = expandedKeys
      this.autoExpandParent = false
    },
    treeCheck (keys) {
      this.checkData = keys.checked
    }
  },
  components: {
    ATree
  }
}
</script>

<style>

</style>
