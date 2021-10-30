const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { ngaService } = require('../services');

const addNga = catchAsync(async (request, response) => {
  const nga = await ngaService.addNga(request.body);
  response.status(httpStatus.CREATED).send(nga);
});

module.exports = {
  addNga,
};
