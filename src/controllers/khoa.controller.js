const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { khoaService } = require('../services');

const createKhoa = catchAsync(async (req, res) => {
  const khoa = await khoaService.createKhoa(req.body);
  res.status(httpStatus.CREATED).send(khoa);
});

const getKhoas = catchAsync(async (req, res) => {
  const result = await khoaService.queryKhoas();
  res.send(result);
});

const getKhoa = catchAsync(async (req, res) => {
  const khoa = await khoaService.getKhoaById(req.params.khoaId);
  if (!khoa) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Khoa not found');
  }
  res.send(khoa);
});

const updateKhoa = catchAsync(async (req, res) => {
  const khoa = await khoaService.updateKhoaById(req.params.khoaId, req.body);
  res.send(khoa);
});

const deleteKhoa = catchAsync(async (req, res) => {
  await khoaService.deleteKhoaById(req.params.khoaId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createKhoa,
  getKhoas,
  getKhoa,
  updateKhoa,
  deleteKhoa,
};
