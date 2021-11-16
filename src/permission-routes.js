const data = [
  {
    name: '首页',
    path: '/home',
    hidden: true,
    p_name: '标签系统',
    p_path: '/lable-system',
    meta: {
      icon: '',
      title: '首页',
      button: [],
    },
  },
  {
    name: '关于',
    path: '/about',
    hidden: true,
    p_name: '标签系统',
    p_path: '/lable-system',
    meta: {
      icon: '',
      title: '关于',
      button: [],
    },
  },
  {
    name: '权限配置',
    path: '/permission-config',
    hidden: false,
    p_name: '权限系统',
    p_path: '/permission-system',
    meta: {
      icon: '',
      title: '权限配置',
      button: ['add', 'edit'],
    },
  },
  {
    name: '权限审批',
    path: '/permission-approve',
    hidden: false,
    p_name: '权限系统',
    p_path: '/permission-system',
    meta: {
      icon: '',
      title: '权限审批',
      button: ['add', 'edit'],
    },
    children: [
      {
        path: '',
        name: 'LabelWorkBenchList',
      },
      {
        path: 'detail',
        name: 'LabelWorkBenchDetail',
      },
    ],
  },
]

//先用map结构记录
function differenceRoutes(data) {
  //非数组或数据长度为0不处理
  if (!data instanceof Array || data.length == 0) {
    return { menu: [], routes: [] }
  }
  // 区分群组
  const map = data.reduce((v, c) => {
    const name = c.p_name
    if (name !== undefined) {
      if (v[name] === undefined) v[name] = []
      v[name].push(c)
    }
    return v
  }, {})
}

const map = differenceRoutes(data)

console.log(map, 'map')

const getPermissionData = (map) => {
  // 返回menu与routes
  return Object.entries(map).reduce(
    (v, [key, value]) => {
      const obj = {
        name: key,
        path: value[0].p_path,
        hidden: value.every((s) => s.hidden),
        p_name: value[0].p_name,
        p_path: value[0].p_path,
        meta: { title: value[0].p_name },
        children: value.filter((s) => !s.hidden),
      }
      return { menu: [...v.menu, obj], routes: [...v.routes, ...value.filter((s) => !s.hidden)] }
    },
    { menu: [], routes: [] }
  )
}
