<template>
  <a-modal visible="" title="添加菜单">
    <a-form>
      <a-form-item></a-form-item>
    </a-form>
  </a-a-modal></template>

<script>
export default {
  data () {
    return {
      visible: false
    }
  },
  methods: {
    addPermission () {
      this.visible = true
    }
  }
}
</script>

<style>

</style>
