<template>
  <a-tree :tree-data="tr"></a-tree>
</template>

<script>
import { treeList } from '@/api/system/permission'
export default {
data() {
  return {
    treeData: []
  }
},
}
</script>

<style>

</style>
