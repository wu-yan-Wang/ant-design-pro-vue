<template>
  <a-card>
    <a-spin :spinning="loading">
      <a-row>
        <a-col span="6">
          <a-tree
            v-if="treeData.length>0"
            default-expand-all
            select-keys="selectKeys"
            @rightClick="rightClick"
            @select="treeSelect"
            :tree-data="treeData"></a-tree>
        </a-col>
        <a-col span="18">
          <a-row>
            <a-col span="4">
              <a-button type="primary" icon="plus" @click="addPermission">新增子节点</a-button>
            </a-col>
            <a-col span="4">
              <a-button type="primary" icon="edit" @click="updatePermission">修改节点</a-button>
            </a-col>
          </a-row>
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
                      initialValue:formData.permissionType
                    }]"></a-input>
                </a-form-item>
              </a-col>
              <a-col v-bind="col2">
                <a-form-item label="是否有效">
                  <a-input
                    v-decorator="['status',{
                      rules:[{required:true,message:'请选择是否有效！'}],
                      initialValue:formData.status
                    }]"></a-input>
                </a-form-item>
              </a-col>
              <a-col v-bind="col2">
                <a-form-item label="菜单url">
                  <a-input
                    v-decorator="['permissionUrl',{initialValue:formData.permissionUrl}]"></a-input>
                </a-form-item>
              </a-col>
              <a-col v-bind="col2">
                <a-form-item label="菜单组件">
                  <a-input
                    v-decorator="['component',{initialValue:formData.component}]"></a-input>
                </a-form-item>
              </a-col>
              <a-col v-bind="col2">
                <a-form-item label="菜单权限">
                  <a-input
                    v-decorator="['permission',{initialValue:formData.permission}]"></a-input>
                </a-form-item>
              </a-col>
              <a-col v-bind="col2">
                <a-form-item label="重定向的路径">
                  <a-input
                    v-decorator="['redirect',{initialValue:formData.redirect}]"></a-input>
                </a-form-item>
              </a-col>
              <a-col v-bind="col2">
                <a-form-item label="菜单图标">
                  <a-input
                    v-decorator="['permissionIcon',{initialValue:formData.permissionIcon}]"></a-input>
                </a-form-item>
              </a-col>
              <a-col v-bind="col2">
                <a-form-item label="排序">
                  <a-input
                    type="number"
                    v-decorator="['displayOrder',{initialValue:formData.displayOrder}]"></a-input>
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
        </a-col>
      </a-row>
      <add-permission :parent-id="selectId" :parent-name="selectName" @refreshTree="loadTreeData()" ref="addModal"></add-permission>
    </a-spin>
  </a-card>

</template>

<script>
import { treeList, getOneById, update } from '@/api/system/permission'
import { Tree as ATree, Modal } from 'ant-design-vue'
import AddPermission from './AddPermission'
export default {
  data () {
    return {
      formData: {},
      treeData: [],
      selectId: '',
      selectName: '',
      loading: false,
      selectKeys: [],
      col2: this.$enum('row.col2'),
      gutter: this.$enum('row.gutter'),
      form: this.$form.createForm(this)
    }
  },
  methods: {
    treeSelect (e, node) {
      const modal = Modal.info()

      modal.update({
        title: '修改的标题',
        content: '修改的内容'
      })

      modal.destroy()
      if (e.length > 0) {
        this.loading = true
        // 选择的节点
        this.selectKeys = e
        // 选择的节点数据
        const data = node.selectedNodes[0].data
        // 子组件父级id和name
        this.selectId = data.key
        this.selectName = data.props.title
        // 查询菜单的数据
        getOneById({ id: this.selectId }).then(res => {
          this.formData = res.result
          this.form.setFieldsValue(res.result)
        }).finally(() => {
          this.loading = false
        })
      }
    },
    rightClick (e) {

    },
    addPermission () {
      if (this.selectKeys.length === 0) {
        this.$message.warning('请选择父节点！')
        return
      }
      this.$refs.addModal.add()
    },
    updatePermission () {
      if (this.selectKeys.length === 0) {
        this.$message.warning('请选择父节点！')
        return
      }
      this.form.validateFields((error, fields) => {
        if (!error) {
          this.loading = true
          update({ ...this.formData, ...fields }).then(() => {
            this.$message.success('更新完成！')
            // TODO 要不要再请求一次数据查询乐观锁,或者后台去查询一下version
            return this.loadTreeData()
          }).finally(() => {
            this.loading = false
          })
        }
      })
    },
    loadTreeData () {
      treeList().then(res => {
        this.treeData = res.result.map((item) => ({ ...item, expanded: true }))
      })
    }
  },
  created () {
    this.loadTreeData()
  },
  components: {
    ATree, AddPermission
  }
}
</script>

<style>

</style>
