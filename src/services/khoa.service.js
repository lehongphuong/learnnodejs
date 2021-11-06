const httpStatus = require('http-status');
const { Khoa } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a khoa
 * @param {Object} khoaBody
 * @returns {Promise<Khoa>}
 */
const createKhoa = async (khoaBody) => {
  return Khoa.create(khoaBody);
};

/**
 * Query for khoas
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryKhoas = async () => {
  const khoas = await Khoa.find();
  return khoas;
};

/**
 * Get khoa by id
 * @param {ObjectId} id
 * @returns {Promise<Khoa>}
 */
const getKhoaById = async (id) => {
  return Khoa.findById(id);
};

/**
 * Get khoa by email
 * @param {string} email
 * @returns {Promise<Khoa>}
 */
const getKhoaByEmail = async (email) => {
  return Khoa.findOne({ email });
};

/**
 * Update khoa by id
 * @param {ObjectId} khoaId
 * @param {Object} updateBody
 * @returns {Promise<Khoa>}
 */
const updateKhoaById = async (khoaId, updateBody) => {
  const khoa = await getKhoaById(khoaId);
  if (!khoa) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Khoa not found');
  }
  if (updateBody.email && (await Khoa.isEmailTaken(updateBody.email, khoaId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  Object.assign(khoa, updateBody);
  await khoa.save();
  return khoa;
};

/**
 * Delete khoa by id
 * @param {ObjectId} khoaId
 * @returns {Promise<Khoa>}
 */
const deleteKhoaById = async (khoaId) => {
  const khoa = await getKhoaById(khoaId);
  if (!khoa) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Khoa not found');
  }
  await khoa.remove();
  return khoa;
};

module.exports = {
  createKhoa,
  queryKhoas,
  getKhoaById,
  getKhoaByEmail,
  updateKhoaById,
  deleteKhoaById,
};
