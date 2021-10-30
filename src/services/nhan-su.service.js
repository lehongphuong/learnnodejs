const { NhanSu } = require('../models');

const addNhanSu = async (nhanSu) => {
  const result = await NhanSu.create({ fullname: "Chiều Cắm Minh" });
  return result;
};

module.exports = {
  addNhanSu,
};
