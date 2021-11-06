const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { baiTap1Service } = require('../services');

const cau1 = catchAsync(async (req, res) => {
  const results = await baiTap1Service.cau1(req.body);
  res.status(httpStatus.CREATED).send(results);
});

const cau2 = catchAsync(async (req, res) => {
  const results = await baiTap1Service.cau2(req.body);
  res.status(httpStatus.CREATED).send(results);
});

const cau3 = catchAsync(async (req, res) => {
  const results = await baiTap1Service.cau3(req.body);
  res.status(httpStatus.CREATED).send(results);
});

const cau4 = catchAsync(async (req, res) => {
  const results = await baiTap1Service.cau4(req.body);
  res.status(httpStatus.CREATED).send(results);
});

module.exports = {
  cau1,
  cau2,
  cau3,
  cau4,
};
