const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

const phuongRoute = require('./phuong.route');

const blogRoute = require('./blog.route');

const ngaRoute = require('./nga.route');
const baiTap1Route = require('./bai-tap-1.router');
const nhanSuRoute = require('./nhan-su.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/phuongs',
    route: phuongRoute,
  },
  {
    path: '/abd',
    route: blogRoute,
  },
  {
    path: '/nga',
    route: ngaRoute,
  },
  {
    path: '/nhansu',
    route: nhanSuRoute,
  },
  {
    path: '/baitap1',
    route: baiTap1Route,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
