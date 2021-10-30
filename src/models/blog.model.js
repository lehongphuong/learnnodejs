const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const blogSchema = mongoose.Schema(
  {
    title: String,
    author: String,
    body: String,
    hidden: Boolean,
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
blogSchema.plugin(toJSON);
blogSchema.plugin(paginate);

/**
 * @typedef Blog
 */
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
