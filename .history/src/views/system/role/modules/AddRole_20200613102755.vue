<template>
  <a-modal :visible="visible" title="新增角色">
    <a-form form="form">
      <a-row :gutter="$enum('row.gutter')">
        <a-col v-bind="col">
          <a-form-item></a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-modal>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      form: this.$form.createForm(this),
      col: this.$enum('row.col2')
    }
  }
}
</script>

<style>

</style>
