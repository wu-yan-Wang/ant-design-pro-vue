
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
    // 获取角色列表 用于用户赋权
    getRoleList: 'system/role/list',
    // 查询用户拥有的角色
    haveRole: 'system/role/haveRole',
    // 添加用户和角色关系
    addUserRole: 'system/role/addUserRole',
    // 分页展示
    pageList: 'system/role/pageList',
    update: 'system/role/updateRole',
    delete: 'system/role/deleteRole',
    // 查询角色下的菜单 用于tree 回显
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
