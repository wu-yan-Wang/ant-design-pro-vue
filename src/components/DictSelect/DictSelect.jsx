import Select from 'ant-design-vue/es/select'
import { getDictType } from '@/api/system/dict'
const Option = Select.Option

export default {
  data () {
    return {
      // 数据
      dictList: []
    }
  },
  props: {
    placeholder: {
      type: String,
      default: '请选择'
    },
    groupCode: {
      type: String,
      default: ''
    },
    default: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    }
  },
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
  },
  render (h) {
    const options = this.dictList.map(
      (item) =>
        (
          <Option key={item.dictValue} value={item.dictValue}>{item.dictLabel}</Option>
        )
    )
    const data = {
      props: {
        ...this.$props
      },
      on: {
        ...this.$listeners
      }
    }
    return (
      <Select {...data}>
        {...options}
      </Select>
    )
  }
}
