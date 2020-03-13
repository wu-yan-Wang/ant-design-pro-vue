<template>
  <div class="table-page-search-wrapper">
    <a-form layout="inline">
      <a-row :gutter="48">
        <slot></slot>
        <template v-if="advanced">
          <slot name="hide-ele"></slot>
        </template>
        <a-col :md="advanced ? 24 : 8" :sm="24">
          <span class="table-page-search-submitButtons" :style="advanced && { float: 'right', overflow: 'hidden' } || {} ">
            <slot name="table-btn"></slot>
            <a @click="toggleAdvanced" style="margin-left: 8px">
              {{ advanced ? '收起' : '展开' }}
              <a-icon :type="advanced ? 'up' : 'down'"/>
            </a>
          </span>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>

<script>
export default {
  data () {
    return { advanced: false }
  },
  methods: {
    toggleAdvanced () {
      this.advanced = !this.advanced
    }
  }
}
</script>
