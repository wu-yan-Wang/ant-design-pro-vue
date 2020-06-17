<template>
  <a-modal
    :visible="visible"
    title="新增字典组"
    @cancel="cancel"
    @ok="handleSumbit"
  >
    <a-spin :spinning="loading">
      <a-form :form="form">
        <a-row :gutter="gutter">
          <a-col v-bind="col">
            <a-form-item label="字典组编码">
              <a-input
                v-decorator="['gruopCode',{
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
      loading: false,
      form: this.form.createForm(this),
      gutter: this.enum('row.gutter'),
      col: this.enum('row.col')
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

    }
  }
}
</script>

<style>
</style>
