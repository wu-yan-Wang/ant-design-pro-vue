<template>
  <a-radio-group v-bind="$props" v-on="$listeners">
    <a-radio v-for="(item,index) in dictList" :key="index" :value="item.dictValue">
      {{ item.dictLabel }}
    </a-radio>
  </a-radio-group>
</template>

<script>
import Radio from 'ant-design-vue/es/radio'
import { getDictType } from '@/api/system/dict'
export default {
  data () {
    return {
      dictList: []
    }
  },
  props: Object.assign({}, Radio.props,
    {
      groupCode: {
        type: String,
        default: ''
      },
      default: {
        type: Boolean,
        default: false
      }
    }),
  model: {
    prop: 'value',
    event: 'change'
  },
  created () {
    getDictType({ groupCode: this.groupCode }).then(({ result }) => {
      this.dictList = result || []
      if (this.default) {
        if (this.dictList.length > 0) {
          this.$emit('change', this.dictList[0].dictValue)
        }
      }
    })
  }
}
</script>

<style>

</style>
