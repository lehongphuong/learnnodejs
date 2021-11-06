const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { ketQuaService } = require('../services');

const createKetQua = catchAsync(async (req, res) => {
  const ketQua = await ketQuaService.createKetQua(req.body);
  res.status(httpStatus.CREATED).send(ketQua);
});

const getKetQuas = catchAsync(async (req, res) => {
  const result = await ketQuaService.queryKetQuas();
  res.send(result);
});

const getKetQua = catchAsync(async (req, res) => {
  const ketQua = await ketQuaService.getKetQuaById(req.params.ketQuaId);
  if (!ketQua) {
    throw new ApiError(httpStatus.NOT_FOUND, 'KetQua not found');
  }
  res.send(ketQua);
});

const updateKetQua = catchAsync(async (req, res) => {
  const ketQua = await ketQuaService.updateKetQuaById(req.params.ketQuaId, req.body);
  res.send(ketQua);
});

const deleteKetQua = catchAsync(async (req, res) => {
  await ketQuaService.deleteKetQuaById(req.params.ketQuaId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createKetQua,
  getKetQuas,
  getKetQua,
  updateKetQua,
  deleteKetQua,
};
