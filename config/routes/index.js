/**
 * 路由配置，
 * 强烈建议将 name，title 也写上，
 * name 写上可自动生产开发环境临时菜单，
 * title 写上可自动切换标签页名称。
 * @type [{name:string,title:string,path:string,component:string}]
 */
const routes = [
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    // 子项往上提，仍旧展示
    flatMenu: true,
    /**
     * 是否严格匹配，
     * 参考：https://umijs.org/zh-CN/docs/routing#exact
     */
    exact: true,
    routes: [
      {
        name: '主页',
        title: '主页',
        path: '/',
        component: '@/pages/index',
      },
      {
        component: '@/pages/404',
      },
    ],
  },

  {
    name: '403',
    title: '403',
    path: '/403',
    component: '@/pages/403',
  },
  {
    name: '404',
    title: '404',
    path: '/404',
    component: '@/pages/404',
  },
  {
    name: '子应用禁止独立运行',
    title: '子应用禁止独立运行',
    path: '/ban-run-alone',
    component: '@/pages/BanRunAlone',
  },
  {
    component: '@/pages/404',
  },
];
export default routes;
