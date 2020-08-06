<template>
  <a-table></a-table>
</template>

<script>
import { MorePageSearch, STable } from '@/components'
export default {
  data() {
    return {
      data:parameter=>parameter
    }
  },
  components: {
    MorePageSearch, STable
  }
}
</script>

<style>

</style>
