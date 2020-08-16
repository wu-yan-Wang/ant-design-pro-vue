<template>
  <a-card :bordered="false">
    <div class="table-operator">
      <a-button
        type="primary"
        icon="import"
        @click="$refs.import.importUser()"
      >导入</a-button>
    </div>
    <s-table
      ref="table"
      size="default"
      :rowKey="item=>item.id"
      :columns="columns"
      :data="loadData"
    >
      <template #serial="text, record,index">
        {{ index+1 }}
      </template>
    </s-table>
    <import-modal
      @ok="loadByBatchNo"
      ref="import"
    ></import-modal>
  </a-card>
</template>

<script>
import { STable } from '@/components'
import ImportModal from './modules/ImportModal.vue'
import { getImportMsgByBatchNo } from '@/api/shopImport'
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
          title: '行号',
          dataIndex: 'excelRow'
        },
        {
          title: '商户号',
          dataIndex: 'poiId'
        },
        {
          title: '商铺名',
          dataIndex: 'shopName'
        },
        {
          title: '分店名',
          dataIndex: 'storeName'
        },
        {
          title: '结果',
          dataIndex: 'importSucc'
        },
        {
          title: '信息',
          dataIndex: 'importMsg'
        }
      ],
      queryParam: {
        batchNo: ''
      },
      loadData: parameter => {
        return getImportMsgByBatchNo(Object.assign(parameter, this.queryParam))
          .then(res => {
            return res.result
          })
      }
    }
  },
  methods: {
    loadByBatchNo (payload) {
      this.queryParam.batchNo = payload
      this.$refs.table.refresh(true)
    }
  },
  components: {
    ImportModal, STable
  }
}
</script>

<style>
</style>
