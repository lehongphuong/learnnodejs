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
  const results = SinhVien.find().select('id hoTen hocBong');
  return results;
};

/**
 * cau3
 * @returns
 */
const cau3 = async () => {
  const results = SinhVien.find().select('id hoTen nu hocBong').where('hocBong').gt(0);
  return results;
};

/**
 * cau4
 * @returns
 */
const cau4 = async () => {
  const results = SinhVien.find().where('nu').equals('Yes');
  return results;
};

module.exports = {
  cau1,
  cau2,
  cau3,
  cau4,
};
