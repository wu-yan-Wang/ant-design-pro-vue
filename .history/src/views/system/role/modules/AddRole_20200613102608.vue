<template>
  <a-modal :visible="visible" title="新增角色">
    <a-form>
      <a-form-item></a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      form: this.$form.createForm(this)
    }
  }
}
</script>

<style>

</style>
