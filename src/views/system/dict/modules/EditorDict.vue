<template>
  <a-modal
    :visible="visible"
    title="编辑字典"
    :width="$enum('modal.width')"
    :confirm-loading="confirmLoading"
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
import { update, getOne } from '@/api/system/dict'
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
  props: {
    dictGroupId: {
      type: String,
      default: ''
    }
  },
  methods: {
    editor (record) {
      this.loading = true
      getOne(record).then(res => {
        this.data = res.result
        const { dictLabel, dictValue, dictDescribe, displayOrder } = res.result
        this.form.setFieldsValue({ dictLabel, dictValue, dictDescribe, displayOrder })
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
          update({ ...this.data, ...fields }).then(() => {
            this.$message.success('修改成功！')
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
