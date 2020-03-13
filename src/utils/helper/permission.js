import ALL_ENUM from './modules'

function plugin (Vue) {
  if (plugin.installed) {
    return
  }

  Vue.prototype.$auth || Object.defineProperties(Vue.prototype, {
    $auth: {
      get () {
        const _this = this
        return (permissions) => {
          const [permission, action] = permissions.split('.')
          const permissionList = _this.$store.getters.roles.permissions
          return permissionList.find((val) => {
            return val.permissionId === permission
          }).actionList.findIndex((val) => {
            return val === action
          }) > -1
        }
      }
    }
  })

  Vue.prototype.$enum || Object.defineProperties(Vue.prototype, {
    $enum: {
      get () {
        return (val) => {
          let result = ALL_ENUM
          val && val.split('.').forEach(v => {
            result = result && result[v] || null
          })
          return result
        }
      }
    }
  })
}

export default plugin
