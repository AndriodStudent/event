var _handle = Object.create(null);

/**
 * 绑定监听事件
 * @param {*String} type 绑定事件类型
 * @param {*Function} callback 事件处理函数
 * @param {*Object} target 事件处理函数执行的上下文环境
 */
function $on(type, callback, target) {
  _handle[type] = _handle[type] || [];
  _handle[type].push({ callback: callback, target: target, once: false });
}

/**
 * 移除监听事件
 * @param {*Stirng} type 移除事件类型
 * @param {*Function} callback 事件处理函数
 * @param {*Object} target 事件处理函数执行的上下文环境
 */
function $off(type, callback, target) {
  if (_handle[type] && _handle[type].length !== 0) {
    for (var i = _handle[type].length - 1; i >= 0; i--) {
      if (callback === _handle[type][i].callback && target === _handle[type][i].target) {
        _handle[type].splice(i, 1);
      }
    }
  }
}
/**
    * 触发指定事件类型的监听
    * @param {*String} type 触发事件类型
    * @param {*Object} params 传递数据
    */
function $fire(type, params) {
  if (_handle[type] && _handle[type].length !== 0) {
    for (var i = _handle[type].length - 1; i >= 0; i--) {
      _handle[type][i].callback.call(_handle[type][i].target, params);
      if (_handle[type][i].once) {
        _handle[type].splice(i, 1);
      }
    }
  }
}

function $stro(type, params) {
  if (_handle[type] && _handle[type].length !== 0) {
    for (var i = _handle[type].length - 1; i >= 0; i--) {
      _handle[type][i].callback.call(_handle[type][i].target, params);
      if (_handle[type][i].once) {
        _handle[type].splice(i, 1);
      }
    }
  }
}

module.exports = {
  $on: $on,
  $off: $off,
  $fire: $fire,
  $stro: $stro,
}