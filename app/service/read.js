'use strict';
const Service = require('egg').Service;
const path = require('path');
const fs = require('fs');
const colors = require('colors');
const _utils = require('../utils');

class ReadService extends Service {
  async readFile() {
    console.log(_utils);
    let data = {};
    try {
      const fileList = fs.readdirSync(path.join(process.cwd(), '/app'));
      const arr = fileList.map(item => {
        return {
          name: item,
        };
      });
      const temPath = process.cwd();
      arr.forEach(item => {
        console.log(path.join(process.cwd(), '/app', `/${item.name}`));
        process.chdir(temPath);
        const stat = fs.statSync(path.join(process.cwd(), '/app', `/${item.name}`));
        if (stat.isDirectory()) item.type = 'folder';
        if (stat.isFile()) {
          item.type = 'file';
          // console.log(path.join(process.cwd(), '/app'));
          process.chdir(path.join(process.cwd(), '/app'));
          const res = fs.readFileSync(`${item.name}`, 'utf-8');
          item.content = res;
        }
      });
      data = {
        error_code: 0,
        data: {
          list: arr,
        },
        message: '成功',
      };
    } catch (err) {
      _utils.cosoleStyle().error(`chdir:${err}`);
      _utils.cosoleStyle().success(`chdir:${err}`);
      _utils.cosoleStyle().warning(`chdir:${err}`);
      _utils.cosoleStyle().bgGreen(`chdir:${err}`);
      _utils.cosoleStyle().rainbow(`chdir:${err}`);
      data = {
        error_code: 0,
        data: {},
        message: '失败',
      };
    }
    return data;
  }
}
module.exports = ReadService;
