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
            <a-col span="4">
              <a-button type="danger" icon="delete" @click="deletePermission">删除节点</a-button>
            </a-col>
          </a-row>
          <a-form :form="form">
            <a-row :gutter="gutter">
              <a-col v-bind="col2">
                <a-form-item label="菜单编码">
                  <a-input
                    v-decorator="['permissionCode',{
                      rules:[{required:true,message:'请输入菜单编码！'}],
                      initialValue:formData.permissionCode
                    }]"></a-input>
                </a-form-item>
              </a-col>
              <a-col v-bind="col2">
                <a-form-item label="菜单名称">
                  <a-input
                    v-decorator="['permissionName',{
                      rules:[{required:true,message:'请输入菜单名称！'}],
                      initialValue:formData.permissionName
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
import { treeList, getOneById, update, deletePermission } from '@/api/system/permission'
import { Tree as ATree, Modal } from 'ant-design-vue'
import AddPermission from './AddPermission'
export default {
  data () {
    return {
      formData: {},
      treeData: [],
      selectId: '',
      selectName: '',
      selectNode: {},
      loading: false,
      selectKeys: [],
      col2: this.$enum('row.col2'),
      gutter: this.$enum('row.gutter'),
      form: this.$form.createForm(this)
    }
  },
  methods: {
    treeSelect (e, node) {
      console.log(node)

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
        this.selectNode = node.node
        // 选择节点的id和name
        this.selectId = this.selectNode.eventKey
        this.selectName = this.selectNode.title
        // 查询菜单的数据
        getOneById({ id: this.selectId }).then(res => {
          this.formData = res.result
          this.form.setFieldsValue({
            permissionCode: this.formData.permissionCode,
            permissionIcon: this.formData.permissionIcon,
            permissionName: this.formData.permissionName,
            permissionType: this.formData.permissionType,
            permissionUrl: this.formData.permissionUrl,
            redirect: this.formData.redirect,
            status: this.formData.status,
            component: this.formData.component,
            displayOrder: this.formData.displayOrder,
            permission: this.formData.permission })
        }).finally(() => {
          this.loading = false
        })
      }
    },
    rightClick (e) {

    },
    addPermission () {
      if (!this.selectId) {
        this.$message.warning('请选择父节点！')
        return
      }
      this.$refs.addModal.add()
    },
    updatePermission () {
      if (!this.selectId) {
        this.$message.warning('请选择要修改的节点！')
        return
      }

      this.form.validateFields((error, fields) => {
        if (!error) {
          this.$confirm({
            content: '是否修改此节点?',
            onOk: () => {
              this.loading = true
              update({ ...this.formData, ...fields }).then(() => {
                this.$message.success('更新完成！')
                return this.loadTreeData()
              }).finally(() => {
                this.loading = false
              })
            }
          })
        }
      })
    },
    deletePermission () {
      if (!this.selectId) {
        this.$message.warning('请选择要删除的节点！')
        return
      }
      if (this.selectNode.$children.length > 0) {
        this.$message.warning('请先删除子节点,再删除父节点！')
        return
      }

      this.$confirm({
        content: `是否删除${this.selectName}?`,
        onOk: () => {
          this.loading = true
          deletePermission({ id: this.selectId }).then(() => {
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
