import { history } from 'umi';

import actions from '@/_shared/actions';

/**
 * 只有当子应用独立运行且处于生产环境时，才禁止进入内容页面。
 */
if (!window.__POWERED_BY_QIANKUN__ && process.env.NODE_ENV === 'production') {
  history.push('/ban-run-alone');
}

function mainAppLoadingStateChange(callback, props, state) {
  callback(props, state); //调用该函数
}

// 通过回调的方式改变状态
function mainAppLoadingStateChangeCb(props, state) {
  setTimeout(() => {
    props.onGlobalStateChange((state, prev) => {
      // state: 变更后的状态; prev 变更前的状态
      console.log(state, prev);
    });
    props.setGlobalState(state);
  }, 1000);
}

export const qiankun = {
  /**
   * 应用加载之前，
   * 子应用单独运行时 props 为空。
   * @param {*} props
   */
  async bootstrap(props) {
    console.log('bootstrap', props);
  },

  /**
   * 应用 render 之前触发，
   * 应用每次进入都会调用。
   */
  async mount(props) {
    console.log('mount', props);
    console.log('app1 mount actions:', actions);
    // 注入 actions 实例
    actions.setActions(props);
    let state = {
      microAppLoading: false,
    };
    // 通过修改全局状态修改子应用加载动画
    mainAppLoadingStateChange(mainAppLoadingStateChangeCb, props, state);
  },

  /**
   * 应用卸载之后触发
   */
  async unmount(props) {
    console.log('unmount', props);
  },
};

/**
 * 请求服务端根据响应动态更新路由
 * @param routes 原路由
 */
export function patchRoutes(routes) {
  console.log('patchRoutes');
  console.log(routes);
}

/**
 * 覆写 render，
 * 比如用于渲染之前做权限校验等。
 * @param oldRender 原渲染方法
 */
export function render(oldRender) {
  console.log('render');
  setTimeout(oldRender, 1000);
}

// 用于在初始加载和路由切换时做一些事情
/**
 * 在初始加载和路由切换时做一些事情，
 * 比如用于做埋点统计、设置标题等。
 * @param params 具体属性详见 console.log
 */
export function onRouteChange(params) {
  console.log('onRouteChange');
  console.log(params);
}
