'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async exec() {
    const { ctx } = this;
    ctx.body = await this.service.exec.execIndex();
  }
}

module.exports = HomeController;
