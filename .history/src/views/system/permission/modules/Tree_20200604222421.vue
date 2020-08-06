<template>
  <a-tree :tree-data="treeData"></a-tree>
</template>

<script>
import { treeList } from '@/api/system/permission'
import {A}
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
  }
}
</script>

<style>

</style>
