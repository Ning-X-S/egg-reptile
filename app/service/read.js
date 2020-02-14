'use strict';
const Service = require('egg').Service;
const path = require('path');
const fs = require('fs');
const _utils = require('../utils');

class ReadService extends Service {
  async readFile() {
    let data = {};
    try {
      const { ctx } = this;
      // console.log(ctx.request.body.read);
      // console.log(Number(ctx.request.body.read));
      if (Number(ctx.request.body.read) !== 1) {
        throw new Error('No reading allowed');
      }
      const fileList = fs.readdirSync(path.join(process.cwd(), '/app'));
      const arr = fileList.map(item => {
        return {
          name: item,
        };
      });
      const temPath = process.cwd();
      arr.forEach(item => {
        // console.log(path.join(process.cwd(), '/app', `/${item.name}`));
        process.chdir(temPath);
        const stat = fs.statSync(path.join(process.cwd(), '/app', `/${item.name}`));
        if (stat.isDirectory()) item.type = 'folder';
        if (stat.isFile()) {
          item.type = 'file';
          // console.log(path.join(process.cwd(), '/app'));
          process.chdir(path.join(process.cwd(), '/app'));
          const res = fs.readFileSync(`${item.name}`, 'utf-8');
          item.content = res;
        } else {
          item.content = '';
        }
      });
      console.log(_utils);
      _utils.cosoleStyle().error('成功');
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
        error_code: 4000001,
        data: {},
        message: '失败',
      };
    }
    return data;
  }
}
module.exports = ReadService;
