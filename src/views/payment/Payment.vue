<template>
  <a-card :bordered="false">
    <div class="table-operator">
      <a-button type="primary" icon="import" @click="$refs.import.importUser()">导入</a-button>
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
    <user-import @ok="$refs.table.refresh(true)" ref="import"></user-import>
  </a-card>
</template>

<script>
import { STable } from '@/components'
import UserImport from './modules/UserImport.vue'
import { list } from '@/api/payment'
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
          title: '银行',
          dataIndex: 'bank'
        },
        {
          title: '药店名称',
          dataIndex: 'drugstoreName'
        },
        {
          title: '药店地址',
          dataIndex: 'drugstoreAddress'
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
        }
      ],
      // 加载数据方法 必须为 Promise 对象
      loadData: parameter => {
        return list(Object.assign(parameter, this.queryParam))
          .then(res => {
            return res.result
          })
      },
      queryParam: {}
    }
  },
  components: {
    STable, UserImport
  }
}
</script>

<style>

</style>
