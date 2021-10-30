const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { baiTap1Service } = require('../services');

const cau1 = catchAsync(async (request, response) => {
  const nhanSu = await baiTap1Service.cau1(request.body);
  response.status(httpStatus.CREATED).send(nhanSu);
});

const cau2 = catchAsync(async (request, response) => {
  const nhanSu = await baiTap1Service.cau2(request.body);
  response.status(httpStatus.CREATED).send(nhanSu);
});

module.exports = {
  cau1,
  cau2,
};
