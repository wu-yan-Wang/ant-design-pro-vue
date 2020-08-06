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
        <a-transfer
          :dataSource="roleData"
          :targetKeys="roleTargetKeys"
          :selectKeys="roleSelectedKeys"
          :showSelectAll="false"
          @change="handleChange"
          @selectChange="handleSelectChange"
          :render="transferRender"
          :listStyle="{
            width: '250px',
            height: '600px',
          }"></a-transfer>
      </a-tab-pane>
    </a-tabs>
  </a-modal>
</template>

<script>
import { Transfer } from 'ant-design-vue'
import { getList } from '@/api/system/role'
export default {
  data () {
    return {
      visible: false,
      roleData: [],
      roleTargetKeys: [],
      roleSelectedKeys: []
    }
  },
  created () {
    getList().then((res) => {
      this.roleData = res.result
    })
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
    handleChange (nextTargetKeys, direction, moveKeys) {
      this.roleTargetKeys = nextTargetKeys
      console.log('targetKeys: ', nextTargetKeys)
      console.log('direction: ', direction)
      console.log('moveKeys: ', moveKeys)
    },
    handleSelectChange (sourceSelectedKeys, targetSelectedKeys) {
      this.roleSelectedKeys = [...sourceSelectedKeys, ...targetSelectedKeys]
    },
    transferRender: (item) => {
      console.log(item)
      return item.roleName
    }
  },
  components: {
    Transfer
  }
}
</script>

<style>
</style>
