/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    security: {
      csrf: {
        enable: false,
      },
    },
    cluster: {
      listen: {
        port: 7878,
      },
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1575599825995_8182';


  // add your middleware config here
  config.middleware = [ 'auth' ];

  config.sequelize = {
    host: '172.18.4.180',
    password: '',
    database: 'reptile_test',
    port: 3213,
    username: 'higo_inf',
    app: true,
    agent: false,
    pool: {
      max: 100, // 最大值
      idle: 5000, // 闲时超时
      acquire: 10000,
    },
    dialectOptions: {
      supportBigNumbers: true,
      bigNumberStrings: true, // 大整数转字符串
      dateStrings: true, // 日期字符串（配合类型转换使用）
      typeCast: true, // 类型转换
    },
    timezone: '+08:00',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
