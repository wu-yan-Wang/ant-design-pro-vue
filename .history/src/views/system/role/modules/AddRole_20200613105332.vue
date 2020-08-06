<template>
  <a-modal
    :width="$enum('modal.width')"
    :visible="visible"
    title="新增角色"
    @cancel="cancel"
    @ok="handleSumbit"
    :confirm-loading="loading">
    <a-spin :spinning="loading">
      <a-form :form="form">
        <a-row :gutter="$enum('row.gutter')">
          <a-col v-bind="col">
            <a-form-item label="角色编码">
              <a-input
                v-decorator="['roleCode',{
                  initialValue:data.roleCode,
                  rules:[{required:true,message:'请输入角色编码！'}]
                }]"></a-input>
            </a-form-item>
          </a-col>
          <a-col v-bind="col">
            <a-form-item label="角色名称">
              <a-input
                v-decorator="['roleName',{
                  initialValue:data.roleName,
                  rules:[{required:true,message:'请输入角色名称！'}]
                }]"></a-input>
            </a-form-item>
          </a-col>
          <a-col v-bind="col">
            <a-form-item label="状态">
              <a-input
                v-decorator="['status',{
                  initialValue:data.status,
                  rules:[{required:true,message:'请选择状态！'
                  }]
                }]"></a-input>
            </a-form-item>
          </a-col>
          <a-col v-bind="col">
            <a-form-item label="排序">
              <a-input
                v-decorator="['displayOrder',{
                  initialValue:data.displayOrder
                }]"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
import { addRole } from '@/api/system/role'
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
      this.form.validateFields((error, fields) => {
        if (!error) {
          this.loading = true
          addRole(fields).then(()=>{
            this.$message.success('添加成功！')
            this.cancel
          })
        }
      })
    }
  }
}
</script>

<style>

</style>
