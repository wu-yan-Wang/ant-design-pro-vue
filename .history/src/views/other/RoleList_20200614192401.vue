<template>
  <a-card :bordered="false">
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="48">
          <a-col :md="8" :sm="24">
            <a-form-item label="角色ID">
              <a-input placeholder="请输入"/>
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="状态">
              <a-select placeholder="请选择" default-value="0">
                <a-select-option value="0">全部</a-select-option>
                <a-select-option value="1">正常</a-select-option>
                <a-select-option value="2">禁用</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <span class="table-page-search-submitButtons">
              <a-button type="primary">查询</a-button>
              <a-button style="margin-left: 8px">重置</a-button>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <s-table
      ref="table"
      size="default"
      :columns="columns"
      :data="loadData"
    >
      <div
        slot="expandedRowRender"
        slot-scope="record"
        style="margin: 0">
        <a-row
          :gutter="24"
          :style="{ marginBottom: '12px' }">
          <a-col :span="12" v-for="(role, index) in record.permissions" :key="index" :style="{ marginBottom: '12px' }">
            <a-col :span="4">
              <span>{{ role.permissionName }}：</span>
            </a-col>
            <a-col :span="20" v-if="role.actionEntitySet.length > 0">
              <a-tag color="cyan" v-for="(action, k) in role.actionEntitySet" :key="k">{{ action.describe }}</a-tag>
            </a-col>
            <a-col :span="20" v-else>-</a-col>
          </a-col>
        </a-row>
      </div>
      <span slot="action" slot-scope="text, record">
        <a @click="$refs.modal.edit(record)">编辑</a>
        <a-divider type="vertical" />
        <a-dropdown>
          <a class="ant-dropdown-link">
            更多 <a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;">详情</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">禁用</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">删除</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </span>
    </s-table>

    <role-modal ref="modal" @ok="handleOk"></role-modal>

  </a-card>
</template>

<script>
import { STable } from '@/components'
import RoleModal from './modules/RoleModal'

export default {
  name: 'TableList',
  components: {
    STable,
    RoleModal
  },
  data () {
    return {
      description: '列表使用场景：后台管理中的权限管理以及角色管理，可用于基于 RBAC 设计的角色权限控制，颗粒度细到每一个操作类型。',

      visible: false,

      form: null,
      mdl: {},

      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: {},
      // 表头
      columns: [
        {
          title: '唯一识别码',
          dataIndex: 'id'
        },
        {
          title: '角色名称',
          dataIndex: 'name'
        },
        {
          title: '状态',
          dataIndex: 'status'
        },
        {
          title: '创建时间',
          dataIndex: 'createTime',
          sorter: true
        }, {
          title: '操作',
          width: '150px',
          dataIndex: 'action',
          scopedSlots: { customRender: 'action' }
        }
      ],
      // 加载数据方法 必须为 Promise 对象
      loadData: parameter => {
        return Promise.resolve(
          {
            'records': [{
              'id': 'admin',
              'name': '管理员',
              'describe': '拥有所有权限',
              'status': 1,
              'creatorId': 'system',
              'createTime': 1497160610259,
              'deleted': 0,
              'permissions': [{
                'roleId': 'admin',
                'permissionId': 'comment',
                'permissionName': '评论管理',
                'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
                'actionEntitySet': [{
                  'action': 'add',
                  'describe': '新增',
                  'defaultCheck': false
                },
                {
                  'action': 'query',
                  'describe': '查询',
                  'defaultCheck': false
                },
                {
                  'action': 'get',
                  'describe': '详情',
                  'defaultCheck': false
                },
                {
                  'action': 'update',
                  'describe': '修改',
                  'defaultCheck': false
                },
                {
                  'action': 'delete',
                  'describe': '删除',
                  'defaultCheck': false
                }
                ],
                'actionList': null,
                'dataAccess': null
              },
              {
                'roleId': 'admin',
                'permissionId': 'member',
                'permissionName': '会员管理',
                'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
                'actionEntitySet': [{
                  'action': 'add',
                  'describe': '新增',
                  'defaultCheck': false
                },
                {
                  'action': 'query',
                  'describe': '查询',
                  'defaultCheck': false
                },
                {
                  'action': 'get',
                  'describe': '详情',
                  'defaultCheck': false
                },
                {
                  'action': 'update',
                  'describe': '修改',
                  'defaultCheck': false
                },
                {
                  'action': 'delete',
                  'describe': '删除',
                  'defaultCheck': false
                }
                ],
                'actionList': null,
                'dataAccess': null
              },
              {
                'roleId': 'admin',
                'permissionId': 'menu',
                'permissionName': '菜单管理',
                'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"}]',
                'actionEntitySet': [{
                  'action': 'add',
                  'describe': '新增',
                  'defaultCheck': false
                },
                {
                  'action': 'import',
                  'describe': '导入',
                  'defaultCheck': false
                },
                {
                  'action': 'get',
                  'describe': '详情',
                  'defaultCheck': false
                },
                {
                  'action': 'update',
                  'describe': '修改',
                  'defaultCheck': false
                }
                ],
                'actionList': null,
                'dataAccess': null
              },
              {
                'roleId': 'admin',
                'permissionId': 'order',
                'permissionName': '订单管理',
                'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
                'actionEntitySet': [{
                  'action': 'add',
                  'describe': '新增',
                  'defaultCheck': false
                },
                {
                  'action': 'query',
                  'describe': '查询',
                  'defaultCheck': false
                },
                {
                  'action': 'get',
                  'describe': '详情',
                  'defaultCheck': false
                },
                {
                  'action': 'update',
                  'describe': '修改',
                  'defaultCheck': false
                },
                {
                  'action': 'delete',
                  'describe': '删除',
                  'defaultCheck': false
                }
                ],
                'actionList': null,
                'dataAccess': null
              },
              {
                'roleId': 'admin',
                'permissionId': 'permission',
                'permissionName': '权限管理',
                'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
                'actionEntitySet': [{
                  'action': 'add',
                  'describe': '新增',
                  'defaultCheck': false
                },
                {
                  'action': 'get',
                  'describe': '详情',
                  'defaultCheck': false
                },
                {
                  'action': 'update',
                  'describe': '修改',
                  'defaultCheck': false
                },
                {
                  'action': 'delete',
                  'describe': '删除',
                  'defaultCheck': false
                }
                ],
                'actionList': null,
                'dataAccess': null
              },
              {
                'roleId': 'admin',
                'permissionId': 'role',
                'permissionName': '角色管理',
                'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
                'actionEntitySet': [{
                  'action': 'add',
                  'describe': '新增',
                  'defaultCheck': false
                },
                {
                  'action': 'get',
                  'describe': '详情',
                  'defaultCheck': false
                },
                {
                  'action': 'update',
                  'describe': '修改',
                  'defaultCheck': false
                },
                {
                  'action': 'delete',
                  'describe': '删除',
                  'defaultCheck': false
                }
                ],
                'actionList': null,
                'dataAccess': null
              },
              {
                'roleId': 'admin',
                'permissionId': 'test',
                'permissionName': '测试权限',
                'actions': '[]',
                'actionEntitySet': [],
                'actionList': null,
                'dataAccess': null
              },
              {
                'roleId': 'admin',
                'permissionId': 'user',
                'permissionName': '用户管理',
                'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"},{"action":"export","defaultCheck":false,"describe":"导出"}]',
                'actionEntitySet': [{
                  'action': 'add',
                  'describe': '新增',
                  'defaultCheck': false
                },
                {
                  'action': 'import',
                  'describe': '导入',
                  'defaultCheck': false
                },
                {
                  'action': 'get',
                  'describe': '详情',
                  'defaultCheck': false
                },
                {
                  'action': 'update',
                  'describe': '修改',
                  'defaultCheck': false
                },
                {
                  'action': 'delete',
                  'describe': '删除',
                  'defaultCheck': false
                },
                {
                  'action': 'export',
                  'describe': '导出',
                  'defaultCheck': false
                }
                ],
                'actionList': null,
                'dataAccess': null
              }
              ]
            },
            {
              'id': 'svip',
              'name': 'SVIP',
              'describe': '超级会员',
              'status': 1,
              'creatorId': 'system',
              'createTime': 1532417744846,
              'deleted': 0,
              'permissions': [{
                'roleId': 'admin',
                'permissionId': 'comment',
                'permissionName': '评论管理',
                'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
                'actionEntitySet': [{
                  'action': 'add',
                  'describe': '新增',
                  'defaultCheck': false
                },
                {
                  'action': 'query',
                  'describe': '查询',
                  'defaultCheck': false
                },
                {
                  'action': 'get',
                  'describe': '详情',
                  'defaultCheck': false
                },
                {
                  'action': 'update',
                  'describe': '修改',
                  'defaultCheck': false
                },
                {
                  'action': 'delete',
                  'describe': '删除',
                  'defaultCheck': false
                }
                ],
                'actionList': null,
                'dataAccess': null
              },
              {
                'roleId': 'admin',
                'permissionId': 'member',
                'permissionName': '会员管理',
                'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
                'actionEntitySet': [{
                  'action': 'add',
                  'describe': '新增',
                  'defaultCheck': false
                },
                {
                  'action': 'query',
                  'describe': '查询',
                  'defaultCheck': false
                },
                {
                  'action': 'get',
                  'describe': '详情',
                  'defaultCheck': false
                }
                ],
                'actionList': null,
                'dataAccess': null
              },
              {
                'roleId': 'admin',
                'permissionId': 'menu',
                'permissionName': '菜单管理',
                'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"}]',
                'actionEntitySet': [{
                  'action': 'add',
                  'describe': '新增',
                  'defaultCheck': false
                },
                {
                  'action': 'import',
                  'describe': '导入',
                  'defaultCheck': false
                },
                {
                  'action': 'get',
                  'describe': '详情',
                  'defaultCheck': false
                }
                ],
                'actionList': null,
                'dataAccess': null
              },
              {
                'roleId': 'admin',
                'permissionId': 'order',
                'permissionName': '订单管理',
                'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
                'actionEntitySet': [{
                  'action': 'add',
                  'describe': '新增',
                  'defaultCheck': false
                },
                {
                  'action': 'query',
                  'describe': '查询',
                  'defaultCheck': false
                },
                {
                  'action': 'get',
                  'describe': '详情',
                  'defaultCheck': false
                },
                {
                  'action': 'update',
                  'describe': '修改',
                  'defaultCheck': false
                }
                ],
                'actionList': null,
                'dataAccess': null
              },
              {
                'roleId': 'admin',
                'permissionId': 'permission',
                'permissionName': '权限管理',
                'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
                'actionEntitySet': [{
                  'action': 'add',
                  'describe': '新增',
                  'defaultCheck': false
                },
                {
                  'action': 'get',
                  'describe': '详情',
                  'defaultCheck': false
                },
                {
                  'action': 'update',
                  'describe': '修改',
                  'defaultCheck': false
                }
                ],
                'actionList': null,
                'dataAccess': null
              },
              {
                'roleId': 'admin',
                'permissionId': 'role',
                'permissionName': '角色管理',
                'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
                'actionEntitySet': [{
                  'action': 'add',
                  'describe': '新增',
                  'defaultCheck': false
                },
                {
                  'action': 'update',
                  'describe': '修改',
                  'defaultCheck': false
                },
                {
                  'action': 'delete',
                  'describe': '删除',
                  'defaultCheck': false
                }
                ],
                'actionList': null,
                'dataAccess': null
              },
              {
                'roleId': 'admin',
                'permissionId': 'test',
                'permissionName': '测试权限',
                'actions': '[]',
                'actionEntitySet': [],
                'actionList': null,
                'dataAccess': null
              },
              {
                'roleId': 'admin',
                'permissionId': 'user',
                'permissionName': '用户管理',
                'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"},{"action":"export","defaultCheck":false,"describe":"导出"}]',
                'actionEntitySet': [{
                  'action': 'add',
                  'describe': '新增',
                  'defaultCheck': false
                },
                {
                  'action': 'import',
                  'describe': '导入',
                  'defaultCheck': false
                },
                {
                  'action': 'get',
                  'describe': '详情',
                  'defaultCheck': false
                },
                {
                  'action': 'update',
                  'describe': '修改',
                  'defaultCheck': false
                }
                ],
                'actionList': null,
                'dataAccess': null
              }
              ]
            },
            {
              'id': 'user',
              'name': '普通会员',
              'describe': '普通用户，只能查询',
              'status': 1,
              'creatorId': 'system',
              'createTime': 1497160610259,
              'deleted': 0,
              'permissions': [{
                'roleId': 'user',
                'permissionId': 'comment',
                'permissionName': '评论管理',
                'actions': '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"}]',
                'actionEntitySet': [{
                  'action': 'query',
                  'describe': '查询',
                  'defaultCheck': false
                },
                {
                  'action': 'get',
                  'describe': '详情',
                  'defaultCheck': false
                }
                ],
                'actionList': null,
                'dataAccess': null
              },

              {
                'roleId': 'user',
                'permissionId': 'marketing',
                'permissionName': '营销管理',
                'actions': '[]',
                'actionEntitySet': [],
                'actionList': null,
                'dataAccess': null
              },
              {
                'roleId': 'user',
                'permissionId': 'member',
                'permissionName': '会员管理',
                'actions': '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"}]',
                'actionEntitySet': [{
                  'action': 'query',
                  'describe': '查询',
                  'defaultCheck': false
                },
                {
                  'action': 'get',
                  'describe': '详情',
                  'defaultCheck': false
                }
                ],
                'actionList': null,
                'dataAccess': null
              },
              {
                'roleId': 'user',
                'permissionId': 'menu',
                'permissionName': '菜单管理',
                'actions': '[]',
                'actionEntitySet': [],
                'actionList': null,
                'dataAccess': null
              },

              {
                'roleId': 'user',
                'permissionId': 'order',
                'permissionName': '订单管理',
                'actions': '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"}]',
                'actionEntitySet': [{
                  'action': 'query',
                  'describe': '查询',
                  'defaultCheck': false
                },
                {
                  'action': 'get',
                  'describe': '详情',
                  'defaultCheck': false
                }
                ],
                'actionList': null,
                'dataAccess': null
              },
              {
                'roleId': 'user',
                'permissionId': 'permission',
                'permissionName': '权限管理',
                'actions': '[]',
                'actionEntitySet': [],
                'actionList': null,
                'dataAccess': null
              },
              {
                'roleId': 'user',
                'permissionId': 'role',
                'permissionName': '角色管理',
                'actions': '[]',
                'actionEntitySet': [],
                'actionList': null,
                'dataAccess': null
              },

              {
                'roleId': 'user',
                'permissionId': 'test',
                'permissionName': '测试权限',
                'actions': '[]',
                'actionEntitySet': [],
                'actionList': null,
                'dataAccess': null
              },
              {
                'roleId': 'user',
                'permissionId': 'user',
                'permissionName': '用户管理',
                'actions': '[]',
                'actionEntitySet': [],
                'actionList': null,
                'dataAccess': null
              }
              ]
            }
            ],
            'pageSize': 10,
            'pageNo': 0,
            'totalPage': 1,
            'totalCount': 5
          }
        )
      },

      selectedRowKeys: [],
      selectedRows: []
    }
  },
  methods: {
    handleEdit (record) {
      this.mdl = Object.assign({}, record)

      this.mdl.permissions.forEach(permission => {
        permission.actionsOptions = permission.actionEntitySet.map(action => {
          return { label: action.describe, value: action.action, defaultCheck: action.defaultCheck }
        })
      })

      console.log(this.mdl)
      this.visible = true
    },
    handleOk () {
      // 新增/修改 成功时，重载列表
      this.$refs.table.refresh()
    },
    onChange (selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },
    toggleAdvanced () {
      this.advanced = !this.advanced
    }
  },
  watch: {
    /*
      'selectedRows': function (selectedRows) {
        this.needTotalList = this.needTotalList.map(item => {
          return {
            ...item,
            total: selectedRows.reduce( (sum, val) => {
              return sum + val[item.dataIndex]
            }, 0)
          }
        })
      }
      */
  }
}
</script>
