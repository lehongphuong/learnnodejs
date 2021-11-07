const { Lop, SinhVien, Khoa, MonHoc, KetQua } = require('../models');

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
  // const results = await SinhVien.find({ hocBong: { $gt: 0 }, 'maLop.tenLop.tenKhoa': 'Công Nghệ Thông Tin' })
  // const results = await SinhVien.find({ hocBong: { $gt: 0 }, 'maLop.tenLop': 'NN19A1N' })
  //   .populate({
  //     path: 'maLop',
  //     select: 'tenLop maKhoa',
  //     populate: {
  //       path: 'maKhoa',
  //       select: 'tenKhoa',
  //     },
  //   })
  //   .select('id hoTen hocBong');
  const results = await SinhVien.aggregate([
    {
      $lookup: {
        from: Lop.collection.name,
        localField: 'maLop',
        foreignField: '_id',
        as: 'phuong',
      },
    },
    {
      $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$phuong', 0] }, '$$ROOT'] } },
    },
    { $project: { phuong: 0 } },
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
};
