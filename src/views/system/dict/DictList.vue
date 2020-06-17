<template>
  <a-card>
    <more-page-search>
      <a-col v-bind="col">
        <a-form-item label="编码">
          <a-input v-model="queryParam.groupCode"></a-input>
        </a-form-item>
      </a-col>
      <a-col v-bind="col">
        <a-form-item label="名称">
          <a-input v-model="queryParam.groupName"></a-input>
        </a-form-item>
      </a-col>
      <template #hide-ele>
        <a-col v-bind="col">
          <a-form-item label="描述">
            <a-input v-model="queryParam.groupDescribe"></a-input>
          </a-form-item>
        </a-col>
      </template>
      <template #table-btn>
        <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
        <a-button type="ghost" @click="()=>queryParam={}">
          重置
        </a-button>
      </template>
    </more-page-search>
    <div class="table-operator">
      <a-button type="primary" icon="plus">新增</a-button>
    </div>
    <s-table ref="table" :data="data" row-key="id" :columns="columns"></s-table>
  </a-card>
</template>

<script>
import { STable, MorePageSearch } from '@/components'
import { groupPageList } from '@/api/system/dict'
export default {
  data () {
    return {
      col: this.$enum('row.col3'),
      data: parameter => groupPageList({ ...this.queryParam, ...parameter }).then((res) => res.result),
      queryParam: {},
      columns: [{
        title: '#',
        scopedSlots: { customRender: 'serial' }
      },
      {
        title: '编码',
        dataIndex: 'groupCode'
      },
      {
        title: '名称',
        dataIndex: 'groupName'
      },
      {
        title: '描述',
        dataIndex: 'groupDescribe'
      }]
    }
  },
  components: {
    STable, MorePageSearch
  }
}
</script>

<style>

</style>
