const { Blog } = require('../models');

/**
 * Create a blog
 * @param {Object} blogBody
 * @returns {Promise<blog>}
 */
const createBlog = async (blogBody) => {
  return Blog.create(blogBody);
};

/**
 * Get all Blog
 * @returns {Promise<blog>}
 */
const getAllBlog = async () => {
  return Blog.find();
};

module.exports = {
  createBlog,
  getAllBlog,
};
