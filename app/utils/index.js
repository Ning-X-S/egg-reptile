'use strict';

const colors = require('colors');

console.log(module.exports);
console.log(exports);
exports = module.exports = {
  cosoleStyle() {
    return {
      error: info => {
        console.log(colors.red(info));
      },
      success: info => {
        console.log(colors.green(info));
      },
      warning: info => {
        console.log(colors.yellow(info));
      },
      bgGreen: info => {
        console.log(colors.bgGreen(info));
      },
      rainbow: info => {
        console.log(colors.rainbow(info));
      },
    };
    // colors.red(`chdir:${err}`));
    // console.log(colors.yellow(`chdir:${err}`));
    // console.log(colors.green(`chdir:${err}`));
    // console.log(colors.bgGreen(`chdir:${err}`));
    // console.log(colors.rainbow(`chdir:${err}`));
  },
};
console.log(module.exports);
console.log(exports);
/* 1. 生成球的数字 */
exports = function makeRandom(n, min, max) {
  // 创建一个数组用来保存生成的 n 个随机数
  const nums = [];
  // 控制生成随机数的个数
  for (let i = 0; i < n; i++) {
    // 生成一个范围 min 到 max 的随机数
    const num = Math.round(Math.random() * (max - min) + min);
    // 去重：判断随机数 num 是否存在于 nums 数组里面
    if (nums.indexOf(num) === -1) {
      // 不存在，添加进数组
      nums.push(num);
    } else {
      // 存在，说明当前这一个随机数作废。重新循环一次。
      i--;
    }
  }
  // 把最终的随机数数组返回出去
  return nums;
};
console.log(module.exports);
console.log(exports);
function makeRandom(n, min, max) {
  // 创建一个数组用来保存生成的 n 个随机数
  const nums = [];
  // 控制生成随机数的个数
  for (let i = 0; i < n; i++) {
    // 生成一个范围 min 到 max 的随机数
    const num = Math.round(Math.random() * (max - min) + min);
    // 去重：判断随机数 num 是否存在于 nums 数组里面
    if (nums.indexOf(num) === -1) {
      // 不存在，添加进数组
      nums.push(num);
    } else {
      // 存在，说明当前这一个随机数作废。重新循环一次。
      i--;
    }
  }
  // 把最终的随机数数组返回出去
  return nums;
}
// 生成 6 个 1 到 33 的随机数，结果为数组。
const redBalls = makeRandom(6, 1, 33).sort(function(a, b) { return a - b; });
console.log('号码为：' + redBalls.join(','));
// 生成 1 个 1 到 16 的随机数，结果为数组。
const blueBalls = makeRandom(1, 1, 16).sort(function(a, b) { return a - b; });
console.log('号码为：' + blueBalls.join(','));
