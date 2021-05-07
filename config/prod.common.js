import packageJson from '../package.json';

/** 获取 outputPath */
function getOutputPath() {
  // 项目名称/描述
  const { description } = packageJson;
  // 打包环境
  const env = process.env.UMI_ENV;
  // 标准化时间戳格式
  const date = new Date().toLocaleDateString().replace(/\//g, '.');
  const time = new Date().toLocaleTimeString().replace(/:/g, '.');
  return `dist-${description}-${env}-${date}-${time}`;
}

/** 生产公共配置 */
const prodCommonConfig = {
  /**
   * 启用 hash，
   * 参考：https://umijs.org/zh-CN/config#hash
   */
  hash: true,
  /**
   * 打算打包时才去适配 ie11, 减少开发环境的编译时间，
   * 如果你需要在开发环境中测试在 ie11 下的兼容性，请将此条移至 config.js
   **/
  targets: { ie: 11 },
  /** 配置额外的 babel 插件 */
  extraBabelPlugins: [
    /** 删除除 error 和 warn 以外的 console */
    ['babel-plugin-transform-remove-console', { exclude: ['error', 'warn'] }],
  ],
  outputPath: getOutputPath(),
};

export default prodCommonConfig;
