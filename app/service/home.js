'use strict';

const Service = require('egg').Service;
// const Op = require('sequelize').Op;

class HomeService extends Service {
  async findHot() {
    const { ctx } = this;
    let data = {};
    try {
      const list = await ctx.model.ReptileModel.findAll();

      data = {
        error_code: 0,
        data: {
          list,
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
    console.log(data);
    return data;
  }
}

module.exports = HomeService;
