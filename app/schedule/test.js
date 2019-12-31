'use strict';

module.exports = {
  schedule: {
    interval: '10s',
    type: 'all',
  },
  async task(ctx) {
    const res = await ctx.service.exec.execIndex();
    console.log('schedule');
    console.log(res);
  },
};
