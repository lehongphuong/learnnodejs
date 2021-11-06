const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const khoaSchema = mongoose.Schema(
  {
    tenKhoa: {
      type: String,
      trim: true,
      required: true,
    },
    soCBGD: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
khoaSchema.plugin(toJSON);
khoaSchema.plugin(paginate);

/**
 * @typedef Khoa
 */
const Khoa = mongoose.model('Khoa', khoaSchema);

module.exports = Khoa;
