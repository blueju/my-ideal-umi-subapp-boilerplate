/**
 * 父子应用间通讯所需的工具类，
 * 由基座应用团队维护，只读，使用该脚手架的项目组团队切勿修改本文件代码。
 *
 * 使用的是官方提供的应用间通信方式 - Actions 通信
 *
 * 参考：
 * 1. https://segmentfault.com/a/1190000022583716
 * 2. https://umijs.org/zh-CN/plugins/plugin-qiankun#父子应用通讯
 * 3. https://qiankun.umijs.org/zh/api#initglobalstatestate
 */

function emptyAction() {
  // 警告：提示当前使用的是空 Action
  console.warn('Current execute action is empty!');
}

class Actions {
  actions = {
    onGlobalStateChange: emptyAction,
    setGlobalState: emptyAction,
  };

  /**
   * 设置 actions
   */
  setActions(actions) {
    this.actions = actions;
    console.log('shared action.js setActions this.action:', this.actions);
  }

  /**
   * 本质上是：调用基座应用传入的 onGlobalStateChange 的方法属性。
   * 注册观察者函数，响应 globalState 变化，在 globalState 发生改变时触发该观察者函数。
   */
  onGlobalStateChange(...args) {
    return this.actions.onGlobalStateChange(...args);
  }

  /**
   * 本质上是：调用基座应用传入的 setGlobalState 的方法属性。
   * 设置 globalState，设置新的值时，内部将执行浅检查，如果检查到 globalState 发生改变则触发通知，通知到所有的观察者函数。
   */
  setGlobalState(...args) {
    return this.actions.setGlobalState(...args);
  }
}

// 实例化
const actions = new Actions();

export default actions;
