<template>
  <a-card :bordered="false">
    <more-page-search>
      <a-col :md="8" :sm="24">
        <a-form-item label="姓名">
          <a-input v-model="queryParam.name"></a-input>
        </a-form-item>
      </a-col>
      <a-col :md="8" :sm="24">
        <a-form-item label="手机号">
          <a-input v-model="queryParam.mobilePhone"></a-input>
        </a-form-item>
      </a-col>
      <template v-slot:hide-ele>
        <a-col :md="8" :sm="24">
          <a-form-item label="身份证号">
            <a-input v-model="queryParam.idCard"></a-input>
          </a-form-item>
        </a-col>
      </template>
      <template v-slot:table-btn>
        <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
        <a-button style="margin-left: 8px" @click="()=>queryParam={}">重置</a-button>
      </template>
    </more-page-search>

    <div class="table-operator">
      <a-button type="primary" icon="plus" @click="$refs.createModal.add()">新建</a-button>
      <a-button type="danger" icon="delete">删除</a-button>
    </div>
    <s-table
      ref="table"
      size="default"
      rowKey="key"
      :columns="columns"
      :alert="options.alert"
      :rowSelection="options.rowSelection"
      :data="loadData"
      showPagination="auto"
    >
    </s-table>
    <add-user ref="createModal" @ok="handleOk"></add-user>
  </a-card>
</template>

<script>
import { STable, Ellipsism, MorePageSearch } from '@/components'
import AddUser from './modules/AddUser'
import { getUserList } from '@/api/system/user'
export default {
  data () {
    return {
      optionAlertShow: false,
      selectedRowKeys: [],
      // custom table alert & rowSelection
      options: {
        alert: { show: true, clear: () => { this.selectedRowKeys = [] } },
        rowSelection: {
          selectedRowKeys: this.selectedRowKeys,
          onChange: this.onSelectChange
        }
      },
      // 表头
      columns: [
        {
          title: '#',
          scopedSlots: { customRender: 'serial' }
        },
        {
          title: '规则编号',
          dataIndex: 'no'
        },
        {
          title: '描述',
          dataIndex: 'description',
          scopedSlots: { customRender: 'description' }
        },
        {
          title: '身份证',
          dataIndex: 'idCard'
        },
        {
          title: '服务调用次数',
          dataIndex: 'callNo',
          sorter: true,
          customRender: (text) => text + ' 次'
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
  created () {
    console.log('路由', this.$route.params)
  },
  methods: {
    tableOption () {
      this.optionAlertShow = !this.optionAlertShow
    },
    handleOk () {
      this.$refs.table.refresh()
    },
    onSelectChange (e) {
      console.log(e)
    }
  },
  components: {
    MorePageSearch,
    STable,
    Ellipsism,
    AddUser
  }
}
</script>
