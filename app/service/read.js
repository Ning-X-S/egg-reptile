'use strict';
const Service = require('egg').Service;
const path = require('path');
const fs = require('fs');

class ReadService extends Service {
  async readFile() {
    let data = {};
    try {
      const fileList = fs.readdirSync(path.join(process.cwd(), '/app'));
      const arr = fileList.map(item => {
        return {
          name: item,
        };
      });
      arr.forEach(item => {
        console.log(path.join(process.cwd(), '/app', `/${item.name}`));
        const stat = fs.statSync(path.join(process.cwd(), '/app', `/${item.name}`));
        if (stat.isDirectory()) item.type = 'folder';
        if (stat.isFile()) item.type = 'file';
      });
      data = {
        error_code: 0,
        data: {
          list: arr,
        },
        message: '成功',
      };
    } catch (err) {
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
