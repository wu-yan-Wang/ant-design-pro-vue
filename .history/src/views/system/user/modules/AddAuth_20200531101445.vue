<template>
  <a-modal
    :visible="visible"
    title="授权"
    :width="600"
    :height="1000"
    @ok="handleSubmit"
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
          :render="item => item.description"
          :listStyle="{
            width: '250px',
            height: '600px',
          }" />
      </a-tab-pane>
    </a-tabs>
  </a-modal>
</template>

<script>
import { Transfer } from 'ant-design-vue'
import { getList, haveRole } from '@/api/system/role'
export default {
  data () {
    return {
      visible: false,
      roleData: [],
      roleTargetKeys: [],
      roleSelectedKeys: []
    }
  },
  async created () {
    const res = await getList()
    this.roleData = res.result.map(item => ({
      key: item.id,
      title: item.roleName,
      description: item.roleName,
      disabled: false }))
    this.roleTargetKeys = ['1']

    const =haveRole();
  },
  methods: {
    add () {
      this.visible = true
    },
    handleSubmit () {

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
