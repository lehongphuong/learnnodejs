const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { nhanSuService } = require('../services');

const addNhanSu = catchAsync(async (request, response) => {
  const nhanSu = await nhanSuService.addNhanSu(request.body);
  response.status(httpStatus.CREATED).send(nhanSu);
});

module.exports = {
  addNhanSu,
};
