<template>
  <a-modal
    :visible="visible"
    title="编辑字典组"
    :width="$enum('modal.width')"
    :confirm-loading="confirmLoading"
    @cancel="cancel"
    @ok="handleSumbit"
  >
    <a-spin :spinning="loading">
      <a-form :form="form">
        <a-row :gutter="gutter">
          <a-col v-bind="col">
            <a-form-item label="字典组编码">
              <a-input
                v-decorator="['groupCode',{
                  rules:[
                    {
                      required:true,
                      message:'请输入字典组编码'
                    }
                  ]
                }]"></a-input>
            </a-form-item>
          </a-col>
          <a-col v-bind="col">
            <a-form-item label="字典组名称">
              <a-input
                v-decorator="['groupName',{
                  rules:[{
                    required:true,
                    message:'请输入字典组名称'
                  }]
                }]"></a-input>
            </a-form-item>
          </a-col>
          <a-col v-bind="col">
            <a-form-item label="描述">
              <a-input
                v-decorator="['groupDescribe']"></a-input>
            </a-form-item>
          </a-col>
          <a-col v-bind="col">
            <a-form-item label="排序">
              <a-input
                v-decorator="['displayOrder']"
                type="number"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
import { updateDictGroup, getDictGroupOne } from '@/api/system/dict'
export default {
  data () {
    return {
      visible: false,
      loading: false,
      confirmLoading: false,
      form: this.$form.createForm(this),
      gutter: this.$enum('row.gutter'),
      col: this.$enum('row.col2'),
      data: {}
    }
  },
  methods: {
    editor (record) {
      this.loading = true
      getDictGroupOne(record).then(res => {
        this.data = res.result
        const { groupCode, groupName, groupDescribe, displayOrder } = res.result
        this.form.setFieldsValue({ groupCode, groupName, groupDescribe, displayOrder })
      }).finally(() => {
        this.loading = false
      })
      this.visible = true
    },
    cancel () {
      this.visible = false
    },
    handleSumbit () {
      this.form.validateFields((error, fields) => {
        if (!error) {
          this.loading = true
          this.confirmLoading = true
          updateDictGroup({ ...this.data, ...fields }).then(() => {
            this.$message.success('修改成功！')
            this.cancel()
            this.$emit('ok')
          }).finally(() => {
            this.loading = false
            this.confirmLoading = false
          })
        }
      })
    }
  }
}
</script>

<style>
</style>
