import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  publicPath: './',
  qiankun: { slave: {} },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
});
