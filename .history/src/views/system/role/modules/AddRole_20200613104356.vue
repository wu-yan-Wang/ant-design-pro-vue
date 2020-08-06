<template>
  <a-modal :visible="visible" title="新增角色" @cancel="cancel" @ok="handSumbit" :confirm-loading="loading">
    <a-spin></a-spin>
  </a-modal>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      form: this.$form.createForm(this),
      col: this.$enum('row.col2'),
      data: {},
      loading: false
    }
  },
  methods: {
    addRole () {
      this.visible = true
    },
    cancel () {
      this.visible = false
    },
    handleSumbit () {

    }
  }
}
</script>

<style>

</style>
