'use strict';

const Service = require('egg').Service;
const { exec } = require('child_process');
const path = require('path');
const { promisify } = require('util');
const execSyncNew = promisify(exec);

// promisify,8.x中新增的工具，实例一个promise
// const Op = require('sequelize').Op;

class ExecService extends Service {
  async execIndex() {
    // const { ctx } = this;
    let data = {};
    try {
      // 输出当前目录（不一定是代码所在的目录）下的文件和文件夹
      const { stdout, stderr } = await execSyncNew('ls', { cwd: path.join(process.cwd(), '/app'), maxBuffer: 2000 * 1024 });
      console.log('-----------------');
      const result = stdout.split('\n').filter(item => item);
      data = {
        error_code: 0,
        data: {
          file_list: result,
          stderr,
        },
        message: '成功',
      };
    } catch (err) {
      data = {
        error_code: 4000001,
        data: {},
        message: '失败',
      };
    }
    return data;
  }
}

module.exports = ExecService;
