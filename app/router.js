'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/findHot', controller.home.findHot);
  router.get('/exec', controller.exec.exec);
};
