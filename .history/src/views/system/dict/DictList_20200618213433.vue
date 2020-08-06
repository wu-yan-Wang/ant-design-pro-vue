<template>
  <a-table></a-table>
</template>

<script>
import { MorePageSearch, STable } from '@/components'
import { pageList } from '@/api/system/dict'
export default {
  data () {
    return {
      data: parameter => pageList(parameter).then(res => res.result),
      columns:[
        {
          title
        }
      ]
    }
  },
  components: {
    MorePageSearch, STable
  }
}
</script>

<style>

</style>
