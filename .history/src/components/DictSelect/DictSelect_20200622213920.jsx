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
  created () {
    getDictType({ groupCode: this.groupCode }).then(({ result }) => {
      this.dictList = result || []
    })
  },
  props: Object.assign({}, Select.props, {
    placeholder: {
      type: String,
      default: '请选择'
    },
    groupCode: String
  }),
  model: {
    prop: 'value',
    event: 'change'
  },
  methods: {
    change: function (changedValue) {
      console.log('changedValue', changedValue)
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
      <Select onChange={this.change} {...data}>
        {options}
      </Select>
    )
  }
}
