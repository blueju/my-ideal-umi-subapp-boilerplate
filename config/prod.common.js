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
  targets: { ie: 11 },
  /** 配置额外的 babel 插件 */
  extraBabelPlugins: [
    /** 删除除 error 和 warn 以外的 console */
    ['babel-plugin-transform-remove-console', { exclude: ['error', 'warn'] }],
  ],
  outputPath: getOutputPath(),
};

export default prodCommonConfig;
