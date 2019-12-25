'use strict';

const colors = require('colors');

module.exports = {
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
