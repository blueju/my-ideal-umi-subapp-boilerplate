import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  publicPath: './',
  qiankun: { slave: {} },
  history: { type: 'hash' },
  routes,
  fastRefresh: {},
});
