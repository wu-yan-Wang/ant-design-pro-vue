
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
      return this.data.map(item => (
        <a-col span={12}>
          <a-col span={4}>
            <Ellipsis tooltip length={8}>{item.permissionName}</Ellipsis>
          </a-col>
          <a-col span={20}>
            {item.children.length > 0 ? this.renderChildren(item.children) : '-'}
          </a-col>
        </a-col>
      ))
    },
    renderChildren (data) {
      data = [{ permissionName: '新增' }, { permissionName: '查询'}, '修改', '删除']
      return data.map(child => (
        <a-tag color="cyan">{child.permissionName}</a-tag>
      ))
    }
  },
  render () {
    return (
      <div style="margin: 0">
        <a-spin spinning={this.loading}>
          <a-row gutter={24} >
            {this.data.length > 0 ? this.renderCol() : <Empty />}
          </a-row>
        </a-spin>
      </div>
    )
  }
}
