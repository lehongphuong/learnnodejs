const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const phuongSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
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
phuongSchema.plugin(toJSON);
phuongSchema.plugin(paginate);

/**
 * @typedef Phuong
 */
const Phuong = mongoose.model('Phuong', phuongSchema);

module.exports = Phuong;
