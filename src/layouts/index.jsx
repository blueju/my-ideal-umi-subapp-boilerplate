import 'antd/dist/antd.min.css';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';

/**
 * 基本布局
 */
const BasicLayout = (props) => {
  /**
   * 渲染开发环境的 layout，
   * 开发环境有开发环境临时菜单，因此此处是模拟基座给出的标准内外边距。
   **/
  const renderDevLayout = () => {
    return (
      <ConfigProvider locale={zhCN}>
        <div style={{ margin: 24 }}>{props.children}</div>
      </ConfigProvider>
    );
  };

  /**
   * 渲染生产环境的 layout，
   * 生产环境的包是要在基座中显示的，基座已经提供了标准的内边边距，因此我们不再需要设置内外边距了。
   */
  const renderProdLayout = () => {
    return <ConfigProvider locale={zhCN}>{props.children}</ConfigProvider>;
  };

  return process.env.NODE_ENV === 'development' ? renderDevLayout() : renderProdLayout();
};

export default BasicLayout;
