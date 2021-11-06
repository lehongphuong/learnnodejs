const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { baiTap1Service } = require('../services');

const cau1 = catchAsync(async (req, res) => {
  const lop = await baiTap1Service.cau1(req.body);
  res.status(httpStatus.CREATED).send(lop);
});

module.exports = {
  cau1,
};
