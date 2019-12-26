'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/home/index', controller.home.index);
  router.get('/home/findHot', controller.home.findHot);
  router.get('/exec/index', controller.exec.index);
  router.post('/read/file', controller.read.file);
};
