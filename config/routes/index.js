const routes = [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      { path: '/', component: '@/pages/index' },
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
];
export default routes;
