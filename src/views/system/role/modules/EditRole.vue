<template>
  <a-modal
    :width="$enum('modal.width')"
    :visible="visible"
    title="编辑角色"
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
                  rules:[{required:true,message:'请输入角色编码！'}]
                }]"></a-input>
            </a-form-item>
          </a-col>
          <a-col v-bind="col">
            <a-form-item label="角色名称">
              <a-input
                v-decorator="['roleName',{
                  rules:[{required:true,message:'请输入角色名称！'}]
                }]"></a-input>
            </a-form-item>
          </a-col>
          <a-col v-bind="col">
            <a-form-item label="状态">
              <a-input
                v-decorator="['status',{
                  rules:[{required:true,message:'请选择状态！'
                  }]
                }]"></a-input>
            </a-form-item>
          </a-col>
          <a-col v-bind="col">
            <a-form-item label="排序">
              <a-input
                v-decorator="['displayOrder']"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
import { updateRole, getOne } from '@/api/system/role'
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
    editRole (record) {
      this.visible = true
      getOne(record).then((res) => {
        this.data = res.result
        this.form.setFieldsValue({
          roleCode: this.data.roleCode,
          roleName: this.data.roleName,
          status: this.data.status,
          displayOrder: this.data.displayOrder
        })
      })
    },
    cancel () {
      this.visible = false
    },
    handleSumbit () {
      this.form.validateFields((error, fields) => {
        if (!error) {
          this.loading = true
          updateRole({ ...this.data, ...fields }).then(() => {
            this.$message.success('更新成功！')
            this.cancel()
            this.$emit('ok')
          }).finally(() => {
            this.loading = false
          })
        }
      })
    }
  }
}
</script>

<style>

</style>
