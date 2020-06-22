<template>
  <a-modal
    :visible="visible"
    title="新增字典"
    :width="$enum('modal.width')"
    :confirm-loading="loading"
    @cancel="cancel"
    @ok="handleSumbit"
  >
    <a-spin :spinning="loading">
      <a-form :form="form">
        <a-row :gutter="gutter">
          <a-col v-bind="col">
            <a-form-item label="字典名称">
              <a-input
                v-decorator="['dictLabel',{
                  rules:[
                    {
                      required:true,
                      message:'请输入字典名称'
                    }
                  ]
                }]"></a-input>
            </a-form-item>
          </a-col>
          <a-col v-bind="col">
            <a-form-item label="字典值">
              <a-input
                v-decorator="['dictValue',{
                  rules:[{
                    required:true,
                    message:'请输入字典值'
                  }]
                }]"></a-input>
            </a-form-item>
          </a-col>
          <a-col v-bind="col">
            <a-form-item label="描述">
              <a-input
                v-decorator="['dictDescribe']"></a-input>
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
import { add } from '@/api/system/dict'
export default {
  data () {
    return {
      visible: false,
      loading: false,
      form: this.$form.createForm(this),
      gutter: this.$enum('row.gutter'),
      col: this.$enum('row.col2')
    }
  },
  props: {
    dictGroupId: {
      type: String,
      default: ''
    }
  },
  methods: {
    create () {
      this.visible = true
    },
    cancel () {
      this.visible = false
    },
    handleSumbit () {
      this.form.validateFields((error, fields) => {
        if (!error) {
          this.loading = true
          add({ ...fields, dictGroupId: this.dictGroupId }).then(() => {
            this.$message.success('添加成功！')
            this.form.resetFields()
            this.$emit('ok')
            this.cancel()
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
