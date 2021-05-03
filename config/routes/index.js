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
    component: '../layouts/BasicLayout',
    flatMenu: true,
    routes: [
      {
        name: '主页',
        title: '主页',
        path: '/',
        component: '@/pages/index',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: '403',
    title: '403',
    path: '/403',
    component: './403',
  },
  {
    name: '禁止独立运行',
    title: '禁止独立运行',
    path: '/ban-run-alone',
    component: './BanRunAlone',
  },
  {
    component: './404',
  },
];
export default routes;
