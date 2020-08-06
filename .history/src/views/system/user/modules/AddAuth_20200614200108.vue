<template>
  <a-modal
    :visible="visible"
    title="授权"
    :width="600"
    :height="1000"
    @ok="handleSubmit"
    :confirm-loading="loading"
    @cancel="handleCancel"
  >
    <a-tabs>
      <a-tab-pane
        tab="角色授权"
        key="role"
      >
        <transfer
          :data-source="roleData"
          :target-keys="roleTargetKeys"
          :select-keys="roleSelectedKeys"
          :show-select-all="false"
          @change="handleChange"
          @selectChange="handleSelectChange"
          :render="item => item.description" />
      </a-tab-pane>
    </a-tabs>
  </a-modal>
</template>

<script>
import { Transfer } from 'ant-design-vue'
import { getList, haveRole, addUserRole } from '@/api/system/role'
export default {
  data () {
    return {
      visible: false,
      roleData: [],
      roleTargetKeys: [],
      roleSelectedKeys: [],
      loading: false,
      userId: ''
    }
  },
  created () {
    getList().then(res => {
      this.roleData = res.result.map(item => ({
        key: item.id,
        title: item.roleName,
        description: item.roleName,
        disabled: false }))
    })
  },
  methods: {
    add (record) {
      this.userId = record.id
      haveRole().then((res) => {
        this.roleTargetKeys = res.result.map(item => item.roleId)
      })

      this.visible = true
    },
    handleSubmit () {
      if (this.roleTargetKeys.length > 0) {
        this.loading = true
        const param = this.roleTargetKeys.map(item => ({ roleId: item }))
        addUserRole(param).then(() => {
          this.$message.success('赋权成功！')
        }).finally(() => {
          this.loading = false
        })
      } else {
        this.$message.warning('请选择要赋权的角色！')
      }
    },
    handleCancel () {
      this.visible = false
    },
    handleChange (nextTargetKeys) {
      this.roleTargetKeys = nextTargetKeys
      console.log(nextTargetKeys)
    },
    handleSelectChange (sourceSelectedKeys, targetSelectedKeys) {
      this.roleSelectedKeys = [...sourceSelectedKeys, ...targetSelectedKeys]
    }
  },
  components: {
    Transfer
  }
}
</script>

<style>
</style>
