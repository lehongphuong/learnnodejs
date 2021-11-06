const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const sinhVienSchema = mongoose.Schema(
  {
    hoTen: {
      type: String,
      trim: true,
      minLength: 5,
      maxLength: 30,
      required: true,
    },
    nu: {
      type: String,
      trim: true,
      required: true,
    },
    ngaySinh: {
      type: Date,
      max: new Date(),
      required: true,
    },
    maLop: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Lop',
    },
    hocBong: {
      type: Number,
      min: 0,
    },
    tinh: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
sinhVienSchema.plugin(toJSON);
sinhVienSchema.plugin(paginate);

/**
 * @typedef SinhVien
 */
const SinhVien = mongoose.model('SinhVien', sinhVienSchema);

module.exports = SinhVien;
