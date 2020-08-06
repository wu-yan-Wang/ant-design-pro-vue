<template>
  <a-tree :tree-data="treeData"></a-tree>
</template>

<script>
import { treeList } from '@/api/system/permission'
import { ATree } from 'ant-design-vue'
export default {
  data () {
    return {
      treeData: []
    }
  },
  created () {
    treeList().then(res => {
      this.treeData = res.result
    })
  },components: {
    New,
  },
}
</script>

<style>

</style>
