const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { monHocService } = require('../services');

const createMonHoc = catchAsync(async (req, res) => {
  const monHoc = await monHocService.createMonHoc(req.body);
  res.status(httpStatus.CREATED).send(monHoc);
});

const getMonHocs = catchAsync(async (req, res) => {
  const result = await monHocService.queryMonHocs();
  res.send(result);
});

const getMonHoc = catchAsync(async (req, res) => {
  const monHoc = await monHocService.getMonHocById(req.params.monHocId);
  if (!monHoc) {
    throw new ApiError(httpStatus.NOT_FOUND, 'MonHoc not found');
  }
  res.send(monHoc);
});

const updateMonHoc = catchAsync(async (req, res) => {
  const monHoc = await monHocService.updateMonHocById(req.params.monHocId, req.body);
  res.send(monHoc);
});

const deleteMonHoc = catchAsync(async (req, res) => {
  await monHocService.deleteMonHocById(req.params.monHocId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createMonHoc,
  getMonHocs,
  getMonHoc,
  updateMonHoc,
  deleteMonHoc,
};
