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
          :data-source="mockData"
          :titles="['Source', 'Target']"
          :target-keys="targetKeys"
          :selected-keys="selectedKeys"
          :render="item => item.title"
          :disabled="disabled"
          @change="handleChange"
          @selectChange="handleSelectChange"
          @scroll="handleScroll"
        />
      </a-tab-pane>
    </a-tabs>
  </a-modal>
</template>

<script>
import { Transfer } from 'ant-design-vue'
// import { getList } from '@/api/system/role'
export default {
  data () {
    const mockData = []
    for (let i = 0; i < 20; i++) {
      mockData.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        disabled: i % 3 < 1
      })
    }

    const oriTargetKeys = mockData.filter(item => +item.key % 3 > 1).map(item => item.key)
    return {
      mockData,
      targetKeys: oriTargetKeys,
      selectedKeys: ['1', '4'],
      disabled: false
    }
  },
  created () {
    // getList().then((res) => {
    //   this.roleData = res.result.map(item => ({
    //     key: item.id,
    //     title: item.roleName,
    //     description: item.roleName,
    //     disabled: false }))
    // })
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
    }
  },
  components: {
    Transfer
  }
}
</script>

<style>
</style>
