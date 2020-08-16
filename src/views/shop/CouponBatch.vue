<template>
  <a-card :bordered="false">
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="48">
          <a-col span="6">
            <a-form-item label="商家名称">
              <a-input v-model="queryParam.shopName"></a-input>
            </a-form-item>
          </a-col>
          <a-col span="6">
            <a-form-item label="卷批次号">
              <a-input v-model="queryParam.imBatchNo"></a-input>
            </a-form-item>
          </a-col>
          <a-col span="12">
            <a-button
              type="primary"
              @click="$refs.table.refresh(true)"
            >查询</a-button>
          </a-col>
        </a-row>
      </a-form>
    </div>
    <s-table
      ref="table"
      size="default"
      :rowKey="item=>item.id"
      :columns="columns"
      :data="loadData"
      showPagination="auto"
      :scroll="{ x: 1300 }"
    >
      <template #serial="text, record,index">
        {{ index+1 }}
      </template>
      <template #status="text">
        {{ text==0?'未激活':text==1?'已激活':text==2?'已暂停':text==3?'已重启':'无' }}
      </template>
    </s-table>
  </a-card>
</template>

<script>
import { STable } from '@/components'
import { getStocks } from '@/api/shopImport'
export default {
  data () {
    return {
      // 表头
      columns: [
        {
          title: '#',
          width: 50,
          scopedSlots: { customRender: 'serial' }
        },
        , {
          title: '券批次号',
          width: 300,
          dataIndex: 'imBatchNo'
        }, {
          title: '商家名称',
          width: 150,
          dataIndex: 'shopName'
        },
        {
          title: '批次名称',
          width: 150,
          dataIndex: 'stockName'
        },
        {
          title: '归属商户号',
          width: 150,
          dataIndex: 'belongMerchant'
        },
        {
          title: '开始时间',
          width: 150,
          dataIndex: 'availableBeginTime'
        },
        {
          title: '结束时间',
          width: 150,
          dataIndex: 'availableEndTime'
        },
        {
          title: '发放总上限',
          width: 150,
          dataIndex: 'maxCoupons'
        },
        {
          title: '发放总预算',
          width: 150,
          dataIndex: 'maxAmount'
        },
        {
          title: '当天发放总上限',
          width: 150,
          dataIndex: 'maxAmountByDay'
        }, {
          title: '单个用户可领取个数',
          width: 170,
          dataIndex: 'maxCouponsPerUser'
        },
        {
          title: '券面额',
          width: 150,
          dataIndex: 'couponAmount'
        }, {
          title: '券门槛',
          width: 150,
          dataIndex: 'transactionMinimum'
        },
        {
          title: '指定支付方式',
          width: 150,
          dataIndex: 'limitPay'
        },
        {
          title: '可核销商户号',
          width: 150,
          dataIndex: 'availableMerchants'
        }, {
          title: '商户流水号',
          width: 300,
          dataIndex: 'outRequestNo'
        }, {
          title: '状态',
          width: 150,
          scopedSlots: { customRender: 'status' },
          dataIndex: 'currState'
        }, {
          title: '激活时间',
          width: 150,
          dataIndex: 'activeDate'
        }, {
          title: '暂停时间',
          width: 150,
          dataIndex: 'pauseDate'
        },
        {
          title: '重启时间',
          width: 150,
          dataIndex: 'restartDate'
        }
      ],
      // 加载数据方法 必须为 Promise 对象
      loadData: parameter => {
        return getStocks(Object.assign(parameter, this.queryParam))
          .then(res => {
            return res.result
          })
      },
      queryParam: {
        imBatchNo: '',
        shopName: ''
      }
    }
  },
  methods: {
  },
  components: {
    STable
  }
}
</script>

<style>
</style>
