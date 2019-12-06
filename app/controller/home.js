'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      error_code: 0,
      data: {
        title: 'test',
      },
      message: '成功',
    };
  }
  async findHot() {
    const { ctx } = this;
    ctx.body = await this.service.home.findHot();
  }
}

module.exports = HomeController;
