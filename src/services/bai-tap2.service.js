const mongoose = require('mongoose');
const { Lop, SinhVien, Khoa, KetQua } = require('../models');

/**
 * cau1
 * @returns
 */
const cau1 = async () => {
  const results = await Lop.find();
  return results;
};

/**
 * cau2
 * @returns
 */
const cau2 = async () => {
  const results = await SinhVien.find().select('maSV hoTen hocBong');
  return results;
};

/**
 * cau3
 * @returns
 */
const cau3 = async () => {
  // > >= < <= gt gte lt lte
  const results = await SinhVien.find().select('nu hocBong').where('hocBong').gt(0);
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
  // const results = await SinhVien.find().where('nu').equals('Yes').where('hocBong').gt(0);
  const results = await SinhVien.find({
    $and: [
      { nu: { $eq: 'No' } },
      { hocBong: { $gt: 0 } }
    ]
  });
  return results;
};

/**
 * cau7
 * @returns
 */
const cau7 = async () => {
  const results = await SinhVien.find({
    $or: [
      { nu: 'Yes' },
      { hocBong: { $gt: 0 } }
    ]
  });
  return results;
};

/**
 * cau 8
 * @returns
 */
const cau8 = async () => {
  const results = await SinhVien.find({
    $and: [
      { ngaySinh: { $gte: new Date(2000, 0, 1) } },
      { ngaySinh: { $lt: new Date(2006, 0, 1) } } // <= 2004
    ]
  });
  return results;
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
        $and: [{ hocBong: { $gt: 0 } }, { maKhoa: mongoose.Types.ObjectId('646841f628f9f26723c10937') }],
      },
    },
    {
      $project: { _id: 1, hoTen: 1, hocBong: 1, tenLop: 1 },
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
  // cau9,
  // cau10,
  // cau11,
  cau12,
  // cau13,
  // cau14,
  // cau15,
  // cau16,
  // cau17,
  // cau18,
  // cau19,
  // cau20,
  // cau21,
  // cau22,
  // cau23,
  // cau24,
  // cau25,
};
