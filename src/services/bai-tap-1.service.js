const { NhanSu } = require('../models');

const cau1 = async () => {
  const result = await NhanSu.find().select('magv hotengv makhoa');
  return result;
};

const cau2 = async () => {
  const result = await NhanSu.find().select('magv hotengv makhoa').where('makhoa').in(['dialy', 'qltn']);
  return result;
};

module.exports = {
  cau1,
  cau2,
};
