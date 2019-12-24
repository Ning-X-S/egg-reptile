'use strict';

const Controller = require('egg').Controller;

class ReadController extends Controller {
  async file() {
    const { ctx } = this;
    ctx.body = await this.service.read.readFile();
  }
}

module.exports = ReadController;
