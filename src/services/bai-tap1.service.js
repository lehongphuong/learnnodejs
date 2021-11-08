const mongoose = require('mongoose');
const { Lop, SinhVien, Khoa, KetQua } = require('../models');

/**
 * cau1
 * @returns
 */
const cau1 = async () => {
  const lops = await Lop.find();
  return lops;
};

/**
 * cau2
 * @returns
 */
const cau2 = async () => {
  const results = await SinhVien.find().select('id hoTen hocBong');
  return results;
};

/**
 * cau3
 * @returns
 */
const cau3 = async () => {
  const results = await SinhVien.find().select('id hoTen nu hocBong').where('hocBong').gt(0);
  return results;
};

/**
 * cau4
 * @returns
 */
const cau4 = async () => {
  const results = await SinhVien.find().where('nu').equals('Yes');
  return results;
};

/**
 * cau5
 * @returns
 */
const cau5 = async () => {
  const results = await SinhVien.find({ hoTen: /^Trần/ });
  return results;
};

/**
 * cau6
 * @returns
 */
const cau6 = async () => {
  const results = await SinhVien.find().where('nu').equals('Yes').where('hocBong').gt(0);
  return results;
};

/**
 * cau7
 * @returns
 */
const cau7 = async () => {
  const results = await SinhVien.find({
    $or: [{ nu: 'Yes' }, { hocBong: { $gt: 0 } }],
  });
  return results;
};

/**
 * cau8
 * @returns
 */
const cau8 = async () => {
  const results = await SinhVien.find({
    ngaySinh: {
      $gte: new Date(1978, 1, 1),
      $lt: new Date(1986, 1, 1),
    },
  });
  return results;
};

/**
 * cau9
 * @returns
 */
const cau9 = async () => {
  const results = await SinhVien.find().sort('id');
  return results;
};

/**
 * cau10
 * @returns
 */
const cau10 = async () => {
  const results = await SinhVien.find().sort('-hocBong');
  return results;
};

/**
 * cau11
 * @returns
 */
const cau11 = async () => {
  const results = await KetQua.find({ diemThi: { $gte: 8 } })
    .populate({ path: 'maSV', select: 'hoTen nu ngaySinh maLop hocBong tinh id' })
    .select('maSV');
  return results.map((item) => item.maSV);
};

/**
 * cau12
 * @returns
 */
const cau12 = async () => {
  const results = await SinhVien.aggregate([
    {
      $lookup: {
        from: Lop.collection.name,
        localField: 'maLop',
        foreignField: '_id',
        as: 'lop',
      },
    },
    {
      $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$lop', 0] }, '$$ROOT'] } },
    },
    { $project: { lop: 0 } },
    {
      $match: {
        $and: [{ hocBong: { $gt: 0 } }, { maKhoa: mongoose.Types.ObjectId('61862d55a941e609e8fd4cdb') }],
      },
    },
    {
      $project: { _id: 1, hoTen: 1, hocBong: 1, tenLop: 1 },
    },
  ]);
  return results;
};

/**
 * cau13
 * @returns
 */
const cau13 = async () => {
  const results = await SinhVien.aggregate([
    {
      $lookup: {
        from: Lop.collection.name,
        localField: 'maLop',
        foreignField: '_id',
        as: 'lop',
      },
    },
    {
      $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$lop', 0] }, '$$ROOT'] } },
    },
    { $project: { lop: 0 } },
    {
      $lookup: {
        from: Khoa.collection.name,
        localField: 'maKhoa',
        foreignField: '_id',
        as: 'khoa',
      },
    },
    {
      $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$khoa', 0] }, '$$ROOT'] } },
    },
    { $project: { khoa: 0 } },
    {
      $match: {
        $and: [{ hocBong: { $gt: 0 } }, { maKhoa: mongoose.Types.ObjectId('61862d55a941e609e8fd4cdb') }],
      },
    },
    {
      $project: { _id: 1, hoTen: 1, hocBong: 1, tenLop: 1, tenKhoa: 1 },
    },
  ]);
  return results;
};

/**
 * cau14
 * @returns
 */
const cau14 = async () => {
  const results = await SinhVien.aggregate([
    {
      $group: { _id: '$maLop', SLSinhVien: { $sum: 1 } },
    },
    {
      $lookup: {
        from: Lop.collection.name,
        localField: '_id',
        foreignField: '_id',
        as: 'lop',
      },
    },
    {
      $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$lop', 0] }, '$$ROOT'] } },
    },
    {
      $project: { _id: 1, tenLop: 1, SLSinhVien: 1 },
    },
  ]);
  return results;
};

/**
 * cau15
 * @returns
 */
const cau15 = async () => {
  const results = await SinhVien.aggregate([
    {
      $lookup: {
        from: Lop.collection.name,
        localField: 'maLop',
        foreignField: '_id',
        as: 'lop',
      },
    },
    {
      $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$lop', 0] }, '$$ROOT'] } },
    },
    {
      $lookup: {
        from: Khoa.collection.name,
        localField: 'maKhoa',
        foreignField: '_id',
        as: 'khoa',
      },
    },
    {
      $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$khoa', 0] }, '$$ROOT'] } },
    },
    {
      $group: { _id: '$maKhoa', tenKhoa: { $first: '$tenKhoa' }, SLSinhVien: { $sum: 1 } },
    },
  ]);
  return results;
};

/**
 * cau16
 * @returns
 */
const cau16 = async () => {
  const results = await SinhVien.aggregate([
    {
      $match: { nu: 'Yes' },
    },
    {
      $lookup: {
        from: Lop.collection.name,
        localField: 'maLop',
        foreignField: '_id',
        as: 'lop',
      },
    },
    {
      $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$lop', 0] }, '$$ROOT'] } },
    },
    {
      $lookup: {
        from: Khoa.collection.name,
        localField: 'maKhoa',
        foreignField: '_id',
        as: 'khoa',
      },
    },
    {
      $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$khoa', 0] }, '$$ROOT'] } },
    },
    {
      $group: { _id: '$maKhoa', tenKhoa: { $first: '$tenKhoa' }, SLSinhVien: { $sum: 1 } },
    },
  ]);
  return results;
};

/**
 * cau17
 * @returns
 */
const cau17 = async () => {
  const results = await SinhVien.aggregate([
    {
      $lookup: {
        from: Lop.collection.name,
        localField: 'maLop',
        foreignField: '_id',
        as: 'lop',
      },
    },
    {
      $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$lop', 0] }, '$$ROOT'] } },
    },
    {
      $group: { _id: '$maLop', tenLop: { $first: '$tenLop' }, tongHB: { $sum: '$hocBong' } },
    },
  ]);
  return results;
};

/**
 * cau18
 * @returns
 */
const cau18 = async () => {
  const results = await SinhVien.aggregate([
    {
      $lookup: {
        from: Lop.collection.name,
        localField: 'maLop',
        foreignField: '_id',
        as: 'lop',
      },
    },
    {
      $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$lop', 0] }, '$$ROOT'] } },
    },
    {
      $lookup: {
        from: Khoa.collection.name,
        localField: 'maKhoa',
        foreignField: '_id',
        as: 'khoa',
      },
    },
    {
      $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$khoa', 0] }, '$$ROOT'] } },
    },
    {
      $group: { _id: '$maLop', tenKhoa: { $first: '$tenKhoa' }, tongHB: { $sum: '$hocBong' } },
    },
  ]);
  return results;
};

/**
 * cau19
 * @returns
 */
const cau19 = async () => {
  const results = await SinhVien.aggregate([
    {
      $lookup: {
        from: Lop.collection.name,
        localField: 'maLop',
        foreignField: '_id',
        as: 'lop',
      },
    },
    {
      $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$lop', 0] }, '$$ROOT'] } },
    },
    {
      $lookup: {
        from: Khoa.collection.name,
        localField: 'maKhoa',
        foreignField: '_id',
        as: 'khoa',
      },
    },
    {
      $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$khoa', 0] }, '$$ROOT'] } },
    },
    {
      $group: { _id: '$maLop', tenKhoa: { $first: '$tenKhoa' }, SLSinhVien: { $sum: 1 } },
    },
    {
      $match: {
        SLSinhVien: { $gt: 100 },
      },
    },
  ]);
  return results;
};

/**
 * cau20
 * @returns
 */
const cau20 = async () => {
  const results = await SinhVien.aggregate([
    {
      $match: { nu: 'Yes' },
    },
    {
      $lookup: {
        from: Lop.collection.name,
        localField: 'maLop',
        foreignField: '_id',
        as: 'lop',
      },
    },
    {
      $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$lop', 0] }, '$$ROOT'] } },
    },
    {
      $lookup: {
        from: Khoa.collection.name,
        localField: 'maKhoa',
        foreignField: '_id',
        as: 'khoa',
      },
    },
    {
      $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$khoa', 0] }, '$$ROOT'] } },
    },
    {
      $group: { _id: '$maLop', tenKhoa: { $first: '$tenKhoa' }, SLSinhVien: { $sum: 1 } },
    },
    {
      $match: {
        SLSinhVien: { $gte: 50 },
      },
    },
  ]);
  return results;
};

/**
 * cau21
 * @returns
 */
const cau21 = async () => {
  const results = await SinhVien.aggregate([
    {
      $lookup: {
        from: Lop.collection.name,
        localField: 'maLop',
        foreignField: '_id',
        as: 'lop',
      },
    },
    {
      $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$lop', 0] }, '$$ROOT'] } },
    },
    {
      $lookup: {
        from: Khoa.collection.name,
        localField: 'maKhoa',
        foreignField: '_id',
        as: 'khoa',
      },
    },
    {
      $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$khoa', 0] }, '$$ROOT'] } },
    },
    {
      $group: { _id: '$maLop', tenKhoa: { $first: '$tenKhoa' }, tongHB: { $sum: '$hocBong' } },
    },
    {
      $match: { tongHB: { $gte: 1000000 } },
    },
  ]);
  return results;
};

/**
 * cau22
 * @returns
 */
const cau22 = async () => {
  const results = await SinhVien.find().sort({ hocBong: -1 }).limit(1);
  return results;
};

/**
 * cau23
 * @returns
 */
const cau23 = async () => {
  const results = await SinhVien.aggregate([
    {
      $lookup: {
        from: KetQua.collection.name,
        localField: '_id',
        foreignField: 'maSV',
        as: 'ketQua',
      },
    },
    {
      $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$ketQua', 0] }, '$$ROOT'] } },
    },
    {
      $project: { ketQua: 0 },
    },
    {
      $match: { maMH: mongoose.Types.ObjectId('61862d09a941e609e8fd4cd3') },
    },
    {
      $sort: { diemThi: -1 },
    },
    {
      $limit: 1,
    },
  ]);
  return results;
};

/**
 * cau24
 * @returns
 */
const cau24 = async () => {
  const ketQuaResult = await KetQua.find({ maMH: mongoose.Types.ObjectId('61862d09a941e609e8fd4cd3') }).select('maSV');
  const results = await SinhVien.find({ _id: { $nin: ketQuaResult.map((x) => x.maSV) } });
  return results;
};

/**
 * cau25
 * @returns
 */
const cau25 = async () => {
  const results = await SinhVien.aggregate([
    {
      $lookup: {
        from: Lop.collection.name,
        localField: 'maLop',
        foreignField: '_id',
        as: 'lop',
      },
    },
    {
      $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$lop', 0] }, '$$ROOT'] } },
    },
    {
      $lookup: {
        from: Khoa.collection.name,
        localField: 'maKhoa',
        foreignField: '_id',
        as: 'khoa',
      },
    },
    {
      $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$khoa', 0] }, '$$ROOT'] } },
    },
    {
      $group: { _id: '$maLop', tenKhoa: { $first: '$tenKhoa' }, SoLuongSV: { $sum: 1 } },
    },
    {
      $sort: { SoLuongSV: -1 },
    },
    {
      $limit: 1,
    },
  ]);
  return results;
};

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
