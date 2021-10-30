const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const nhanSuSchema = mongoose.Schema(
  {
    fullname: String,
    address: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
nhanSuSchema.plugin(toJSON);
nhanSuSchema.plugin(paginate);

/**
 * @typedef NhanSu
 */
const NhanSu = mongoose.model('NhanSu', nhanSuSchema);

module.exports = NhanSu;
