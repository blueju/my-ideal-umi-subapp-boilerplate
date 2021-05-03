import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  publicPath: './',
  qiankun: { slave: {} },
  history: { type: 'hash' },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
});
