const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { blogService } = require('../services');

const createBlog = catchAsync(async (req, res) => {
  const blog = await blogService.createBlog(req.body);
  res.status(httpStatus.CREATED).send(blog);
});

const getAllBlog = catchAsync(async (request, response) => {
  const blogs = await blogService.getAllBlog();
  response.send(blogs);
});

module.exports = {
  createBlog,
  getAllBlog,
};
