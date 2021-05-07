/**
 * 本地临时配置（可以认为是：开发环境配置）
 * 这份配置会和 .umirc.js 做 deep merge 后形成最终配置，
 * .umirc.local.js 仅在 umi dev 时有效，umi build 时不会被加载，
 *
 * 参考：
 * 1. https://umijs.org/zh-CN/docs/config#本地临时配置
 * 2. https://umijs.org/zh-CN/plugins/plugin-layout
 */

import { defineConfig } from 'umi';

export default defineConfig({
  layout: {
    name: '开发环境临时菜单',
    locale: false,
  },
  // 是为了消除警告 "export 'SelectLang' was not found in 'umi'
  locale: {},
});
