<template>
  <a-card :bordered="false">
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="48">
          <a-col>
            <a-form-item label="日期">
              <a-range-picker @change="onChange" />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </div>
    <div class="table-operator">
      <a-button
        type="primary"
        icon="export"
        @click="exportExcel()"
      >导出</a-button>
    </div>
    <s-table
      ref="table"
      size="default"
      :rowKey="item=>item.id"
      :columns="columns"
      :data="loadData"
      showPagination="auto"
    >
      <span
        slot="serial"
        slot-scope="text, record,index"
      >
        {{ index+1 }}
      </span>
    </s-table>
  </a-card>
</template>

<script>
import { STable } from '@/components'
import { paymentLogList } from '@/api/payment'
export default {
  data () {
    return {
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
          title: '手机号',
          dataIndex: 'phoneNumber'
        },
        {
          title: '金额',
          dataIndex: 'money'
        },
        {
          title: '提现时间',
          dataIndex: 'paymentDate'
        },
        {
          title: '结果',
          dataIndex: 'result'
        }
      ],
      // 加载数据方法 必须为 Promise 对象
      loadData: parameter => {
        return paymentLogList(Object.assign(parameter, this.queryParam))
          .then(res => {
            return res.result
          })
      },
      queryParam: {
        startDate: '',
        endDate: ''
      }
    }
  },
  methods: {
    onChange (date, dateString) {
      this.queryParam.startDate = dateString[0]
      this.queryParam.endDate = dateString[1]
      this.$refs.table.refresh(true)
    },
    exportExcel () {
      const a = document.createElement('a')
      a.href = `/shop/payment-log/exportExcel?startDate=${this.queryParam.startDate}&endDate=${this.queryParam.endDate}`
      a.target = "_self"
      a.click()
    }
  },
  components: {
    STable
  }
}
</script>

<style>
</style>
