const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const lopSchema = mongoose.Schema(
  {
    tenLop: {
      type: String,
      trim: true,
      required: true,
    },
    maKhoa: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Khoa',
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
