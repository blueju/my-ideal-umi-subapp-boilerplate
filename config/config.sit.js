/**
 * sit 生产环境配置
 */
import { defineConfig } from 'umi';

import prodCommonConfig from './config/prod.common';

export default defineConfig({
  ...prodCommonConfig,
});
