'use strict';

const Service = require('egg').Service;
// const Op = require('sequelize').Op;

class HomeService extends Service {
  async findHot() {
    const { ctx } = this;
    console.log(ctx.app.mysql);
    let data = {};
    try {
      console.log(ctx.query);
      const { page = 1, size: limit = 10, id = null } = ctx.query;
      console.log(page);
      console.log(limit);
      console.log(id);
      console.log(limit * (page - 1));
      const queryObj = {
        attributes: [ 'id', 'title' ],
        offset: limit * (page - 1),
        limit: parseInt(limit),
        where: {},
      };
      console.log(id.split(','));
      if (id) {
        queryObj.where.id = id.split(',');
      }
      const list = await ctx.model.ReptileModel.findAll(queryObj);
      // console.log(ctx.request.body);
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
        error_code: 4000001,
        data: {},
        message: '查询失败',
      };
    }
    return data;
  }
}

module.exports = HomeService;
