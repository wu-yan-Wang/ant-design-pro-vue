<template>
  <a-modal :visible="visible" title="新增角色">

  </a-modal>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      form:this.$form.createForm
    }
  }
}
</script>

<style>

</style>
