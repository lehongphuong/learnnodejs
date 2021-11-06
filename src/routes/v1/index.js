const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

const sinhVienRoute = require('./sinh-vien.route');
const lopRoute = require('./lop.route');
const khoaRoute = require('./khoa.route');
const ketQuaRoute = require('./ket-qua.route');
const monHocRoute = require('./mon-hoc.route');
const baiTap1Route = require('./bai-tap1.route');

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
    path: '/sinh-viens',
    route: sinhVienRoute,
  },
  {
    path: '/lops',
    route: lopRoute,
  },
  {
    path: '/khoas',
    route: khoaRoute,
  },
  {
    path: '/mon-hocs',
    route: monHocRoute,
  },
  {
    path: '/ket-quas',
    route: ketQuaRoute,
  },
  {
    path: '/bai-tap1',
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
