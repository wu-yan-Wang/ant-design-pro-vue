
import { getPermissionByRoleId } from '@/api/system/role'
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
    getPermissionByRoleId({ id: this.roleId }).then(res => {
      this.data = res.result
    }).finally(() => {
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
      debugger
      return (
        data.map(child => (
          <a-col span="2">{child.permissionName}</a-col>
        ))
      )
    }
  },
  render () {
    return (
      <a-row gutter={this.$enum('row.gutter')}>
        <a-spin spinning={this.loading}>
          {this.renderCol()}
        </a-spin>
      </a-row>
    )
  }
}
