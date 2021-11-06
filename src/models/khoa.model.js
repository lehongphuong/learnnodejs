const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const lopSchema = mongoose.Schema(
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
lopSchema.plugin(toJSON);
lopSchema.plugin(paginate);

/**
 * @typedef Lop
 */
const Lop = mongoose.model('Lop', lopSchema);

module.exports = Lop;
