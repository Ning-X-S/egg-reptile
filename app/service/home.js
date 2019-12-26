'use strict';

const Service = require('egg').Service;
// const Op = require('sequelize').Op;

class HomeService extends Service {
  async findHot() {
    const { ctx } = this;
    let data = {};
    try {
      const { page = 1, size: limit = 10 } = ctx.query;
      console.log(page);
      console.log(limit);
      const queryObj = {
        attributes: [ 'id', 'title' ],
        offset: parseInt(limit) * (page - 1),
        limit: parseInt(limit),
        where: {
          id: 28,
        },
      };
      const list = await ctx.model.ReptileModel.findAll(queryObj);
      console.log(ctx.request.body);
      console.log(ctx.query);
      // 当前文件夹的目录
      console.log(__dirname);
      // 当前文件的目录
      console.log(__filename);
      // 进程运行中的目录
      console.log(process.cwd());
      const newsList = [];
      list.forEach(item => {
        newsList.push(item.get());
      });
      data = {
        error_code: 0,
        data: {
          list: newsList,
          total: list.count,
        },
        message: '成功',
      };
    } catch (err) {
      data = {
        error_code: 40000001,
        data: {},
        message: '查询失败',
      };
    }
    return data;
  }
}

module.exports = HomeService;
