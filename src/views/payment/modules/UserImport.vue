<template>
  <a-modal
    :visible="visible"
    title="导入用户"
    @cancel="handleCancel"
    @ok="handleUpload"
    :confirmLoading="confirmLoading"
  >
    <a-row
      type="flex"
      justify="center"
    >
      <a-col v-bind="col1">
        <a-button
          type="primary"
          icon="download"
          @click="download"
        >下载模板</a-button>
      </a-col>
      <a-col v-bind="col1">
        <a-upload
          name="file"
          :fileList="fileList"
          accept=".xlsx"
          :before-upload="beforeUpload"
        >
          <a-button>
            <a-icon type="upload" /> 上传文件 </a-button>
        </a-upload>
      </a-col>
    </a-row>
  </a-modal>
</template>

<script>
import { upload } from '@/api/payment'
export default {
  data () {
    return {
      fileList: [],
      visible: false,
      confirmLoading: false,
      col1: this.$enum('form.col3')
    }
  },
  methods: {
    importUser () {
      this.visible = true
    },
    handleCancel () {
      this.visible = false
    },
    download () {
      const a = document.createElement('a')
      a.href = '/plus/public/导入模板.xlsx'
      a.click()
    },
    beforeUpload (file) {
      this.fileList = [file]
      return false
    },
    handleUpload () {
      this.confirmLoading = true
      if (this.fileList.length > 0) {
        const formData = new FormData()
        formData.append('file', this.fileList[0])
        upload(formData).then((result) => {
          if (result.code === 0) {
            this.$message.error('上传失败！')
          } else {
            if (result.result) {
              this.$message.error(result.result)
            } else {
              this.$message.success('上传成功！')
              this.fileList = []
              this.handleCancel()
              this.$emit('ok')
            }
          }
          this.confirmLoading = false
        }).catch((err) => {
          debugger
          this.confirmLoading = false
          this.$message.warning(err)
        })
      } else {
        this.confirmLoading = false
        this.$message.warning('请选择文件！')
      }
    }
  }
}
</script>

<style>
</style>
