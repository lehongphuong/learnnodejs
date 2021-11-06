const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const ketQuaSchema = mongoose.Schema(
  {
    maSV: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'SinhVien',
    },
    maMH: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'MonHoc',
    },
    diemThi: {
      type: Number,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
ketQuaSchema.plugin(toJSON);
ketQuaSchema.plugin(paginate);

/**
 * @typedef KetQua
 */
const KetQua = mongoose.model('KetQua', ketQuaSchema);

module.exports = KetQua;
