
export default {
  // 字典
  dict: {
    getDictType: 'system/dict/getDictByType'
  },
  // 系统用户
  user: {
    getUserList: 'system/user/pageList',
    add: 'system/user/add'
  },
  // 角色
  role: {
    // 获取角色列表 用于用户
    getRoleList: 'system/role/list',
    pageList: 'system/role/pageList',
    update: 'system/role/updateRole',
    delete: 'system/role/deleteRole',
    haveRole: 'system/role/haveRole',
    addUserRole: 'system/role/addUserRole',
    getPermissionByRoleId: 'system/rolePermission/getPermissionByRoleId',
    getTagPermissionByRoleId: 'system/rolePermission/getTagPermissionByRoleId',
    addRolePermission: 'system/role/addRolePermission'
  },
  // 菜单
  permission: {
    list: 'system/permission/pageList',
    add: 'system/permission/add',
    update: 'system/permission/update',
    delete: 'system/permission/delete',
    treeList: 'system/permission/treeList',
    getOneById: 'system/permission/getOneById'
  }
}
