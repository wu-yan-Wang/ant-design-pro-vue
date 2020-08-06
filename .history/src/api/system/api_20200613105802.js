
export default {
  // 字典
  dict: {
    getDictType: 'system/dict/getDictByType'
  },
  // 系统用户
  user: {
    // 用户分页
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
    add: 'system/role/addRole',
    // 查询角色下的菜单 用于tree 回显
    getPermissionByRoleId: 'system/rolePermission/getPermissionByRoleId',
    // 查询列表下的权限标签
    getTagPermissionByRoleId: 'system/rolePermission/getTagPermissionByRoleId',
    // 增加角色和权限
    addRolePermission: 'system/rolePermission/addRolePermission'
  },
  // 菜单
  permission: {
    // 菜单分页
    list: 'system/permission/pageList',
    add: 'system/permission/add',
    update: 'system/permission/update',
    delete: 'system/permission/delete',
    // 获取菜单树
    treeList: 'system/permission/treeList',
    getOneById: 'system/permission/getOneById'
  }
}
