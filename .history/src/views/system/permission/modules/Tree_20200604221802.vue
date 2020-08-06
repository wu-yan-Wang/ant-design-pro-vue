<template>
  <a-tree :tree-data="treeData"></a-tree>
</template>

<script>
import { treeList } from '@/api/system/permission'
export default {
data() {
  return {
    treeData: []
  }
},
created () {
  treeList().then(res=>{
    this.treeData=res.res
  });
},
}
</script>

<style>

</style>
