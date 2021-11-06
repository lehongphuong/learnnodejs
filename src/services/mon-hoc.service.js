const httpStatus = require('http-status');
const { MonHoc } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a monHoc
 * @param {Object} monHocBody
 * @returns {Promise<MonHoc>}
 */
const createMonHoc = async (monHocBody) => {
  return MonHoc.create(monHocBody);
};

/**
 * Query for monHocs
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryMonHocs = async () => {
  const monHocs = await MonHoc.find();
  return monHocs;
};

/**
 * Get monHoc by id
 * @param {ObjectId} id
 * @returns {Promise<MonHoc>}
 */
const getMonHocById = async (id) => {
  return MonHoc.findById(id);
};

/**
 * Get monHoc by email
 * @param {string} email
 * @returns {Promise<MonHoc>}
 */
const getMonHocByEmail = async (email) => {
  return MonHoc.findOne({ email });
};

/**
 * Update monHoc by id
 * @param {ObjectId} monHocId
 * @param {Object} updateBody
 * @returns {Promise<MonHoc>}
 */
const updateMonHocById = async (monHocId, updateBody) => {
  const monHoc = await getMonHocById(monHocId);
  if (!monHoc) {
    throw new ApiError(httpStatus.NOT_FOUND, 'MonHoc not found');
  }
  if (updateBody.email && (await MonHoc.isEmailTaken(updateBody.email, monHocId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  Object.assign(monHoc, updateBody);
  await monHoc.save();
  return monHoc;
};

/**
 * Delete monHoc by id
 * @param {ObjectId} monHocId
 * @returns {Promise<MonHoc>}
 */
const deleteMonHocById = async (monHocId) => {
  const monHoc = await getMonHocById(monHocId);
  if (!monHoc) {
    throw new ApiError(httpStatus.NOT_FOUND, 'MonHoc not found');
  }
  await monHoc.remove();
  return monHoc;
};

module.exports = {
  createMonHoc,
  queryMonHocs,
  getMonHocById,
  getMonHocByEmail,
  updateMonHocById,
  deleteMonHocById,
};
