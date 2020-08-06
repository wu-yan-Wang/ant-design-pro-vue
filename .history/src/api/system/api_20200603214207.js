import permission from "@/store/modules/async-router";

export default {
  // 字典
  dict: {
    getDictType: 'system/dict/getDictByType'
  },
  // 系统用户
  user: {
    getUserList: 'system/user/list'
  },
  // 角色
  role: {
    getRoleList: 'system/role/list',
    haveRole: 'system/role/haveRole',
    addUserRole: 'system/role/addUserRole'
  }
  // 菜单
  permission:{
    list:'system/permission/list',
    add:'system/permission/'
  }
}
