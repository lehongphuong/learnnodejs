const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { phuongService } = require('../services');

const createPhuong = catchAsync(async (req, res) => {
  const phuong = await phuongService.createPhuong(req.body);
  res.status(httpStatus.CREATED).send(phuong);
});

const getPhuongs = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await phuongService.queryPhuongs(filter, options);
  res.send(result);
});

module.exports = {
  createPhuong,
  getPhuongs,
};
