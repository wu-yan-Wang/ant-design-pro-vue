
import { getTagPermissionByRoleId } from '@/api/system/role'
import Empty from 'ant-design-vue/es/empty'
import { Ellipsis } from '@/components'
export default {
  data () {
    return {
      loading: false,
      data: []
    }
  },
  props: {
    roleId: {
      type: String,
      default: null
    }
  },
  created () {
    this.loading = true
    getTagPermissionByRoleId({ id: this.roleId })
      .then(res => {
        this.data = res.result
      })
      .finally(() => {
        this.loading = false
      })
  },
  methods: {
    renderCol () {
      const props = { props: { ...this.$enum('row.col2') } }
      return this.data.map(item => (
        <a-col {...props}>
          <a-col span="4">
            <span> {item.permissionName}</span>
          </a-col>
          {item.children.length > 0 && this.renderChildren(item.children)}
        </a-col>
      ))
    },
    renderChildren (data) {
      return data.map(child => (
        <a-col span="2">
          <a-tag color="pink">{child.permissionName}</a-tag>
        </a-col>
      ))
    }
  },
  render () {
    return (
      <a-spin spinning={this.loading}>
        <a-row gutter={this.$enum('row.gutter')}>
          {this.data.length > 0 ? this.renderCol() : <Empty />}
        </a-row>
      </a-spin>
    )
  }
}
