<template>
  <a-modal
    :width="$enum('modal.width')"
    :visible="visible"
    :confirm-loading="loading"
    title="添加菜单"
    @cancel="cancel()"
    @ok="submit()">
    <a-spin :spinning="loading">
      <a-form :form="form">
        <a-row :gutter="gutter">
          <a-col v-bind="col2">
            <a-form-item label="父级菜单">
              <a-input
                v-decorator="['parentName',{
                  initialValue:parentName,
                  rules:[{required:true,message:'父级菜单未加载！'}]
                }]"
                disabled></a-input>
            </a-form-item>
          </a-col>
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
                  rules:[{required:true,message:'请输入菜单类型！'}]
                }]"></a-input>
            </a-form-item>
          </a-col>
          <a-col v-bind="col2">
            <a-form-item label="是否有效">
              <a-input
                v-decorator="['status',{
                  rules:[{required:true,message:'请选择是否有效！'}]
                }]"></a-input>
            </a-form-item>
          </a-col>
          <a-col v-bind="col2">
            <a-form-item label="菜单url">
              <a-input
                v-decorator="['permissionUrl']"></a-input>
            </a-form-item>
          </a-col>
          <a-col v-bind="col2">
            <a-form-item label="菜单组件">
              <a-input
                v-decorator="['component']"></a-input>
            </a-form-item>
          </a-col>
          <a-col v-bind="col2">
            <a-form-item label="菜单权限">
              <a-input
                v-decorator="['permission']"></a-input>
            </a-form-item>
          </a-col>
          <a-col v-bind="col2">
            <a-form-item label="重定向的路径">
              <a-input
                v-decorator="['redirect']"></a-input>
            </a-form-item>
          </a-col>
          <a-col v-bind="col2">
            <a-form-item label="菜单图标">
              <a-input
                v-decorator="['permissionIcon']"></a-input>
            </a-form-item>
          </a-col>
          <a-col v-bind="col2">
            <a-form-item label="排序">
              <a-input
                type="number"
                v-decorator="['displayOrder']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      form: this.$form.createForm(this),
      gutter: this.$enum('row.gutter'),
      col2: this.$enum('row.col3'),
      loading: false
    }
  },
  props: {
    parentName: {
      type: String,
      default: ''
    },
    parentId: {
      type: String,
      default: ''
    }
  },
  methods: {
    add () {
      this.visible = true
    },
    cancel () {
      this.visible = false
    },
    submit () {
     this.form.validateFields(error,fields){
        this.loading = true
     }
    }
  }
}
</script>

<style>

</style>
