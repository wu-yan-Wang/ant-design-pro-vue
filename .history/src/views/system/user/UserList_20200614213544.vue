<template>
  <a-card :bordered="false">
    <more-page-search>
      <a-col
        v-bind="col"
      >
        <a-form-item label="姓名">
          <a-input v-model="queryParam.name"></a-input>
        </a-form-item>
      </a-col>
      <a-col
        v-bind="col"
      >
        <a-form-item label="手机号">
          <a-input v-model="queryParam.mobilePhone"></a-input>
        </a-form-item>
      </a-col>
      <template v-slot:hide-ele>
        <a-col
          v-bind="col"
        >
          <a-form-item label="身份证号">
            <a-input v-model="queryParam.idCard"></a-input>
          </a-form-item>
        </a-col>
      </template>
      <template v-slot:table-btn>
        <a-button
          type="primary"
          @click="$refs.table.refresh(true)"
        >查询</a-button>
        <a-button
          style="margin-left: 8px"
          @click="()=>queryParam={}"
        >重置</a-button>
      </template>
    </more-page-search>

    <div class="table-operator">
      <a-button
        type="primary"
        icon="plus"
        @click="$refs.createModal.add()"
      >新建</a-button>
      <a-dropdown>
        <a-menu slot="overlay">
          <!-- lock | unlock -->
          <a-menu-item key="2">
            <a-icon type="lock" />启用</a-menu-item>
        </a-menu>
        <a-button style="margin-left: 8px">
          批量操作
          <a-icon type="down" />
        </a-button>
      </a-dropdown>
    </div>
    <s-table
      ref="table"
      size="default"
      row-key="id"
      :columns="columns"
      :data="loadData"
      showPagination="auto"
    >
      <template #serial="text, record,index"><span>{{ index+1 }}</span></template>
      <template #action="text,record">
        <a @click="$refs.addAuth.add(record)">赋权</a>
        <a-divider type="vertical"/>
        <a @click="handleEdit(record)">编辑</a>
        <a-divider type="vertical" />
        <a-popconfirm title="确定删除吗？" @confirm="handleDel">
          <a href="#">删除</a>
        </a-popconfirm>
      </template>
    </s-table>
    <add-user
      ref="createModal"
      @ok="handleOk"
    ></add-user>
    <add-auth ref="addAuth"></add-auth>
    <edit-user ref="editUser" @ok="handleOk"></edit-user>
  </a-card>
</template>

<script>
import { STable, MorePageSearch } from '@/components'
import { AddAuth, AddUser, EditUser } from './modules'
import { getUserList, remove } from '@/api/system/user'

export default {
  data () {
    return {
      col: this.$enum('row.col3'),
      // 表头
      columns: [
        {
          title: '#',
          scopedSlots: { customRender: 'serial' }
        },
        {
          title: '姓名',
          dataIndex: 'name'
        },
        {
          title: '账号',
          dataIndex: 'account'
        },
        {
          title: '手机号',
          dataIndex: 'mobilePhone'
        },
        {
          title: '身份证',
          dataIndex: 'idCard'
        },
        {
          title: '性别',
          dataIndex: 'sex'
        },
        {
          title: '状态',
          dataIndex: 'status',
          scopedSlots: { customRender: 'status' }
        },
        {
          title: '更新时间',
          dataIndex: 'updatedAt',
          sorter: true
        },
        {
          title: '操作',
          dataIndex: 'action',
          width: '150px',
          scopedSlots: { customRender: 'action' }
        }
      ],
      // 加载数据方法 必须为 Promise 对象
      loadData: parameter => {
        return getUserList(Object.assign(parameter, this.queryParam))
          .then(res => {
            return res.result
          })
      },
      queryParam: {}
    }
  },
  methods: {
    handleOk () {
      this.$refs.table.refresh()
    },
    handleEdit (record) {
      this.$refs.editUser.edit(record)
    },
    handleDel (record) {
      this.$confirm({ content: '确定删除吗？',
        onOk: () => {
          remove(record).then(() => {
            this.$message.warning('删除成功！')
            this.handleOk()
          })
        }
      })
    }
  },
  components: {
    MorePageSearch,
    STable,
    AddUser,
    AddAuth,
    EditUser
  }
}
</script>
