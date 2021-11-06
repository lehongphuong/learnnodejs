const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const monHocSchema = mongoose.Schema(
  {
    tenMH: {
      type: String,
      trim: true,
      required: true,
    },
    soTiet: {
      type: Number,
      min: 1,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
monHocSchema.plugin(toJSON);
monHocSchema.plugin(paginate);

/**
 * @typedef MonHoc
 */
const MonHoc = mongoose.model('MonHoc', monHocSchema);

module.exports = MonHoc;
