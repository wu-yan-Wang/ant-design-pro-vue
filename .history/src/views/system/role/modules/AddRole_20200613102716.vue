<template>
  <a-modal :visible="visible" title="新增角色">
    <a-form>
      <a-row :gutter="$enum('row.gutter')">
        <a-col :span=""></a-col>
      </a-row>
      <a-form-item></a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      form: this.$form.createForm(this),
      col:
    }
  }
}
</script>

<style>

</style>
