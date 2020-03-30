import Select from 'ant-design-vue/es/select'
import { getDictType } from '@/api/system/dict'
const Option = Select.Option
export default {
  data () {
    const value = this.value || undefined
    return {
      // value
      dictValue: value,
      // 数据
      dictList: []
    }
  },
  watch: {
    value (val) {
      this.dictValue = val
    }
  },
  created () {
    getDictType({ dictType: this.dictType }).then(({ result }) => {
      this.dictList = result || []
    })
  },
  props: Object.assign({}, Select.props, {
    placeholder: {
      type: String,
      default: '请选择'
    },
    dictType: String
  }),
  model: {
    prop: 'value',
    event: 'change'
  },
  methods: {
    change: function (changedValue) {
      this.$emit('change', changedValue)
    }
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
      }
    }
    return (
      <Select onChange={this.change} value={this.dictValue} {...data}>
        {options}
      </Select>
    )
  }
}
