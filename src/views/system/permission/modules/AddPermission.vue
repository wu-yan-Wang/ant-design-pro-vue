<template>
  <a-drawer :width="700" title="添加菜单" :visible="visible" placement="right" @close="cancel()">
    <a-spin :spinning="loading">
      <a-card>
        <a-form :form="form" layout="horizontal" @onValuesChange="onValuesChange">
          <a-row :gutter="16">
            <a-col :span="4"><a-form-item label="菜单类型" :required="true"></a-form-item></a-col>
            <a-col :span="20">
              <a-form-item>
                <dict-radio
                  group-code="permissionType"
                  v-decorator="['permissionType',{
                    rules:[{required:true,message:'请选择菜单类型！'}],
                    initialValue:'menu'
                  }]"></dict-radio>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="4" class="text-right">
              <a-form-item label="父级菜单" :required="true" :wrapper-col="{'text-align': 'right'}" ></a-form-item>
            </a-col>
            <a-col :span="20">
              <a-form-item label="">
                <a-input
                  v-decorator="['parentName',{
                    initialValue:parentName,
                    rules:[{required:true,message:'父级菜单未加载！'}]
                  }]"
                  disabled></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="4" class="text-right">
              <a-form-item label="菜单编码" :required="true"></a-form-item>
            </a-col>
            <a-col :span="20">
              <a-form-item>
                <a-input
                  v-decorator="['permissionCode',{
                    rules:[{required:true,message:'请输入菜单编码！'}]
                  }]"></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="4" class="text-right">
              <a-form-item label="菜单名称" :required="true"></a-form-item>
            </a-col>
            <a-col :span="20">
              <a-form-item>
                <a-input
                  v-decorator="['permissionName',{
                    rules:[{required:true,message:'请输入菜单名称！'}]
                  }]"></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="4" class="text-right">
              <a-form-item label="是否有效" style="text-align:right;" :required="true"></a-form-item>
            </a-col>
            <a-col :span="20">
              <a-form-item>
                <dict-select
                  default
                  group-code="status"
                  v-decorator="['status',{
                    rules:[{required:true,message:'请选择是否有效！'
                    }],
                    initialValue:'1'
                  }]"></dict-select>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16" v-if="eleVisible">
            <a-col :span="4" class="text-right">
              <a-form-item label="菜单url" :required="true"></a-form-item>
            </a-col>
            <a-col :span="20">
              <a-form-item>
                <a-input
                  v-decorator="['permissionUrl',{
                    rules:[{required:true,message:'请输入菜单url'
                    }]
                  }]"></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16" v-if="eleVisible">
            <a-col :span="4" class="text-right">
              <a-form-item label="菜单组件" :required="true"></a-form-item>
            </a-col>
            <a-col :span="20">
              <a-form-item>
                <a-input
                  v-decorator="['component',{
                    rules:[{required:true,message:'请输入菜单组件'
                    }]
                  }]"></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16" v-if="!eleVisible">
            <a-col :span="4" class="text-right">
              <a-form-item label="菜单权限" :required="true"></a-form-item>
            </a-col>
            <a-col :span="20">
              <a-form-item>
                <a-input
                  v-decorator="['permission',{
                    rules:[{required:true,message:'请输入菜单权限'
                    }]
                  }]"></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="4" class="text-right">
              <a-form-item label="重定向的路径"></a-form-item>
            </a-col>
            <a-col :span="20">
              <a-form-item>
                <a-input
                  v-decorator="['redirect']"></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="4" class="text-right">
              <a-form-item label="菜单图标"></a-form-item>
            </a-col>
            <a-col :span="20">
              <a-form-item>
                <a-input
                  v-decorator="['permissionIcon']"
                  disabled>
                  <template #addonAfter>
                    <a-icon :type="iconType" @click="$refs.previewIcons.previewIcon()"></a-icon>
                  </template>
                </a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="4" class="text-right">
              <a-form-item label="排序" :required="true"></a-form-item>
            </a-col>
            <a-col :span="20">
              <a-form-item>
                <a-input
                  type="number"
                  v-decorator="['displayOrder',{rules:[{required:true,message:'请输入排序！'}]}]"></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <div
            :style="{
              textAlign: 'right'
            }"
          >
            <a-button :style="{ marginRight: '8px' }" @click="cancel">
              取消
            </a-button>
            <a-button type="primary" @click="submit">
              确定
            </a-button>
          </div>
        </a-form>
      </a-card>
    </a-spin>
    <preview-icons @choose="chooseIcon" ref="previewIcons"></preview-icons>
  </a-drawer>
</template>

<script>
import { add } from '@/api/system/permission'
import DictSelect from '@/components/DictSelect'
import DictRadio from '@/components/DictRadio/DictRadio'
import { PreviewIcons } from '@/components'
export default {
  data () {
    return {
      visible: false,
      form: this.$form.createForm(this, { onValuesChange: (props, fields) => {
        if (fields['permissionType']) {
          this.permissionType = fields['permissionType']
        }
      } }),
      gutter: this.$enum('row.gutter'),
      col: this.$enum('row.col1'),
      loading: false,
      iconType: 'setting',
      permissionType: 'menu'
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
  computed: {
    eleVisible () {
      return this.permissionType === 'menu'
    }
  },
  methods: {
    onValuesChange (fields) {
      console.log(fields)
    },
    add () {
      this.visible = true
    },
    cancel () {
      this.visible = false
    },
    chooseIcon (icon) {
      this.form.setFieldsValue({ permissionIcon: icon })
      this.iconType = icon
    },
    submit () {
      this.form.validateFields((error, fields) => {
        console.log(fields)

        if (!error) {
          this.loading = true
          add({ ...fields, parentId: this.parentId }).then(() => {
            this.$message.success('添加成功！')
          }).finally(() => {
            this.loading = false
            this.cancel()
            this.$emit('refreshTree')
            this.form.resetFields()
          })
        }
      })
    }
  },
  components: {
    DictSelect, PreviewIcons, DictRadio
  }
}
</script>

<style>

</style>
