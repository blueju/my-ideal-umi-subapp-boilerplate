import packageJson from '../package.json';
/** 未在 package.json 依赖关系中列出模块，直接借用了其他模块中依赖的 moment，如 antd */
import moment from 'moment';

/**
 * 因为目前我们这需要手动打包后，放入 sofa boot 中二次打包发布，
 * 为了方便记录打包时刻，因此对打包后文件的命名做了点标准化。
 * @returns {string}
 */
function getOutputPath() {
  // 项目名称/描述
  const { description } = packageJson;
  // 打包环境
  const env = process.env.UMI_ENV;
  // 标准化时间戳格式
  const date = moment().format('YYYY.MM.DD');
  const time = moment().format('hh.mm');
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
