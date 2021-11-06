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

const cau5 = catchAsync(async (req, res) => {
  const results = await baiTap1Service.cau5(req.body);
  res.status(httpStatus.CREATED).send(results);
});

const cau6 = catchAsync(async (req, res) => {
  const results = await baiTap1Service.cau6(req.body);
  res.status(httpStatus.CREATED).send(results);
});

const cau7 = catchAsync(async (req, res) => {
  const results = await baiTap1Service.cau7(req.body);
  res.status(httpStatus.CREATED).send(results);
});

const cau8 = catchAsync(async (req, res) => {
  const results = await baiTap1Service.cau8(req.body);
  res.status(httpStatus.CREATED).send(results);
});

const cau9 = catchAsync(async (req, res) => {
  const results = await baiTap1Service.cau9(req.body);
  res.status(httpStatus.CREATED).send(results);
});

const cau10 = catchAsync(async (req, res) => {
  const results = await baiTap1Service.cau10(req.body);
  res.status(httpStatus.CREATED).send(results);
});

const cau11 = catchAsync(async (req, res) => {
  const results = await baiTap1Service.cau11(req.body);
  res.status(httpStatus.CREATED).send(results);
});

const cau12 = catchAsync(async (req, res) => {
  const results = await baiTap1Service.cau12(req.body);
  res.status(httpStatus.CREATED).send(results);
});

const cau13 = catchAsync(async (req, res) => {
  const results = await baiTap1Service.cau13(req.body);
  res.status(httpStatus.CREATED).send(results);
});

const cau14 = catchAsync(async (req, res) => {
  const results = await baiTap1Service.cau14(req.body);
  res.status(httpStatus.CREATED).send(results);
});

const cau15 = catchAsync(async (req, res) => {
  const results = await baiTap1Service.cau15(req.body);
  res.status(httpStatus.CREATED).send(results);
});

const cau16 = catchAsync(async (req, res) => {
  const results = await baiTap1Service.cau16(req.body);
  res.status(httpStatus.CREATED).send(results);
});

const cau17 = catchAsync(async (req, res) => {
  const results = await baiTap1Service.cau17(req.body);
  res.status(httpStatus.CREATED).send(results);
});

const cau18 = catchAsync(async (req, res) => {
  const results = await baiTap1Service.cau18(req.body);
  res.status(httpStatus.CREATED).send(results);
});

const cau19 = catchAsync(async (req, res) => {
  const results = await baiTap1Service.cau19(req.body);
  res.status(httpStatus.CREATED).send(results);
});

const cau20 = catchAsync(async (req, res) => {
  const results = await baiTap1Service.cau20(req.body);
  res.status(httpStatus.CREATED).send(results);
});

const cau21 = catchAsync(async (req, res) => {
  const results = await baiTap1Service.cau21(req.body);
  res.status(httpStatus.CREATED).send(results);
});

const cau22 = catchAsync(async (req, res) => {
  const results = await baiTap1Service.cau22(req.body);
  res.status(httpStatus.CREATED).send(results);
});

const cau23 = catchAsync(async (req, res) => {
  const results = await baiTap1Service.cau23(req.body);
  res.status(httpStatus.CREATED).send(results);
});

const cau24 = catchAsync(async (req, res) => {
  const results = await baiTap1Service.cau24(req.body);
  res.status(httpStatus.CREATED).send(results);
});

const cau25 = catchAsync(async (req, res) => {
  const results = await baiTap1Service.cau25(req.body);
  res.status(httpStatus.CREATED).send(results);
});

module.exports = {
  cau1,
  cau2,
  cau3,
  cau4,
  cau5,
  cau6,
  cau7,
  cau8,
  cau9,
  cau10,
  cau11,
  cau12,
  cau13,
  cau14,
  cau15,
  cau16,
  cau17,
  cau18,
  cau19,
  cau20,
  cau21,
  cau22,
  cau23,
  cau24,
  cau25,
};
