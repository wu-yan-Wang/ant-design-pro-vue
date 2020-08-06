<template>
  <a-card>
    <a-row>
      <a-col span="6">
        <a-tree select-keys="selectKeys" @rightClick="rightClick" @select="treeSelect" :tree-data="treeData"></a-tree>
      </a-col>
      <a-col span="18">
        <a-row>
          <a-col span="4">
            <a-button type="primary" icon="plus" @click="addPermission">新增子节点</a-button>
          </a-col>
          <a-col span="4">
            <a-button type="primary" icon="update">修改节点</a-button>
          </a-col>
        </a-row>
        <a-form :form="form">
          <a-row :gutter="gutter">
            <a-col v-bind="col2">
              <a-form-item label="菜单编码">
                <a-input
                  v-decorator="['permissionCode',{
                    rules:[{required:true,message:'请输入菜单编码！'}],
                    initialValue:data.permissionCode
                  }]"></a-input>
              </a-form-item>
            </a-col>
            <a-col v-bind="col2">
              <a-form-item label="菜单名称">
                <a-input
                  v-decorator="['permissionName',{
                    rules:[{required:true,message:'请输入菜单名称！'}],
                    initialValue:data.permissionName
                  }]"></a-input>
              </a-form-item>
            </a-col>
            <a-col v-bind="col2">
              <a-form-item label="菜单类型">
                <a-input
                  v-decorator="['permissionType',{
                    rules:[{required:true,message:'请输入菜单类型！'}],
                    initialValue:data.permissionType
                  }]"></a-input>
              </a-form-item>
            </a-col>
            <a-col v-bind="col2">
              <a-form-item label="菜单url">
                <a-input
                  v-decorator="['permissionUrl',{
                    initialValue:data.permissionUrl
                  }]"></a-input>
              </a-form-item>
            </a-col>
            <a-col v-bind="col2">
              <a-form-item label="菜单权限">
                <a-input
                  v-decorator="['permission',{
                    initialValue:data.permission
                  }]"></a-input>
              </a-form-item>
            </a-col>
            <a-col v-bind="col2">
              <a-form-item label="菜单组件">
                <a-input
                  v-decorator="['component',{
                    initialValue:data.component
                  }]"></a-input>
              </a-form-item>
            </a-col>
            <a-col v-bind="col2">
              <a-form-item label="重定向的路径">
                <a-input
                  v-decorator="['redirect',{
                    initialValue:data.redirect
                  }]"></a-input>
              </a-form-item>
            </a-col>
            <a-col v-bind="col2">
              <a-form-item label="菜单图标">
                <a-input
                  v-decorator="['permissionIcon',{
                    initialValue:data.permissionIcon
                  }]"></a-input>
              </a-form-item>
            </a-col>
            <a-col v-bind="col2">
              <a-form-item label="排序">
                <a-input
                  type="number"
                  v-decorator="['displayOrder',{
                    initialValue:data.displayOrder
                  }]"></a-input>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </a-col>
    </a-row>
    <add-permission :parent-id="selectId" ref="addModal"></add-permission>
  </a-card>

</template>

<script>
import { treeList, getOneById } from '@/api/system/permission'
import { Tree as ATree } from 'ant-design-vue'
import AddPermission from './AddPermission'
export default {
  data () {
    return {
      data: {},
      treeData: [],
      selectId: '',
      selectName: '',
      selectKeys: [],
      col2: this.$enum('row.col2'),
      gutter: this.$enum('row.gutter'),
      form: this.$form.createForm(this)
    }
  },
  methods: {
    treeSelect (e, node) {
      if (e.length > 0) {
        this.selectKeys = e
        const data = node.selectedNodes[0].data
        this.selectId = data.key
        this.selectName = data.props.title
        getOneById({ id: this.selectId }).then(res => {
          this.data = res.result
        })
      }
    },
    rightClick (e) {

    },
    addPermission () {
      if (this.selectNode.length === 0) {
        this.$message.warning('请选择父节点！')
        return
      }
      this.$refs.addModal.add()
    }
  },
  created () {
    treeList().then(res => {
      this.treeData = res.result
    })
  },
  components: {
    ATree, AddPermission
  }
}
</script>

<style>

</style>
