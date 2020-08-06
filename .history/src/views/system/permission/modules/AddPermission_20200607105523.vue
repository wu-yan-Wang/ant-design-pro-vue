<template>
  <a-modal :visible="visible" title="添加菜单">
    <a-form :form="form">
      <a-row :gutter="gutter">
        <a-col v-bind="col2">
          <a-form-item label="菜单编码">
            <a-input
              v-decorator="['permissionCode',{
                rules:[{required:true,message:'请输入菜单编码！'}]
              }]"></a-input>
          </a-form-item>
        </a-col>
        <a-col v-bind="col2">
          <a-form-item label="菜单名称">
            <a-input
              v-decorator="['permissionName',{
                rules:[{required:true,message:'请输入菜单名称！'}]
              }]"></a-input>
          </a-form-item>
        </a-col>
        <a-col v-bind="col2">
          <a-form-item label="菜单类型">
            <a-input
              v-decorator="['permissionType',{
                rules:[{required:true,message:'请输入菜单类型！'}],
                initialValue:data.permissionType
              }]"></a-input>
          </a-form-item>
        </a-col>
        <a-col v-bind="col2">
          <a-form-item label="菜单url">
            <a-input
              v-decorator="['permissionUrl',{
                initialValue:data.permissionUrl
              }]"></a-input>
          </a-form-item>
        </a-col>
        <a-col v-bind="col2">
          <a-form-item label="菜单权限">
            <a-input
              v-decorator="['permission',{
                initialValue:data.permission
              }]"></a-input>
          </a-form-item>
        </a-col>
        <a-col v-bind="col2">
          <a-form-item label="菜单组件">
            <a-input
              v-decorator="['component',{
                initialValue:data.component
              }]"></a-input>
          </a-form-item>
        </a-col>
        <a-col v-bind="col2">
          <a-form-item label="重定向的路径">
            <a-input
              v-decorator="['redirect',{
                initialValue:data.redirect
              }]"></a-input>
          </a-form-item>
        </a-col>
        <a-col v-bind="col2">
          <a-form-item label="菜单图标">
            <a-input
              v-decorator="['permissionIcon',{
                initialValue:data.permissionIcon
              }]"></a-input>
          </a-form-item>
        </a-col>
        <a-col v-bind="col2">
          <a-form-item label="排序">
            <a-input
              type="number"
              v-decorator="['displayOrder',{
                initialValue:data.displayOrder
              }]"></a-input>
          </a-form-item>
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
      gutter: this.$enum('row.gutter'),
      col2: this.$enum('row.col2')
    }
  },
  methods: {
    add () {
      this.visible = true
    }
  },
  created () {
    console.log('啦啦啦~~~~~~~')
  }
}
</script>

<style>

</style>
