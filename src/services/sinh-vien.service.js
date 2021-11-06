const httpStatus = require('http-status');
const { SinhVien } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a sinhVien
 * @param {Object} sinhVienBody
 * @returns {Promise<SinhVien>}
 */
const createSinhVien = async (sinhVienBody) => {
  return SinhVien.create(sinhVienBody);
};

/**
 * Query for sinhViens
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const querySinhViens = async () => {
  const sinhViens = await SinhVien.find();
  return sinhViens;
};

/**
 * Get sinhVien by id
 * @param {ObjectId} id
 * @returns {Promise<SinhVien>}
 */
const getSinhVienById = async (id) => {
  return SinhVien.findById(id);
};

/**
 * Get sinhVien by email
 * @param {string} email
 * @returns {Promise<SinhVien>}
 */
const getSinhVienByEmail = async (email) => {
  return SinhVien.findOne({ email });
};

/**
 * Update sinhVien by id
 * @param {ObjectId} sinhVienId
 * @param {Object} updateBody
 * @returns {Promise<SinhVien>}
 */
const updateSinhVienById = async (sinhVienId, updateBody) => {
  const sinhVien = await getSinhVienById(sinhVienId);
  if (!sinhVien) {
    throw new ApiError(httpStatus.NOT_FOUND, 'SinhVien not found');
  }
  if (updateBody.email && (await SinhVien.isEmailTaken(updateBody.email, sinhVienId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  Object.assign(sinhVien, updateBody);
  await sinhVien.save();
  return sinhVien;
};

/**
 * Delete sinhVien by id
 * @param {ObjectId} sinhVienId
 * @returns {Promise<SinhVien>}
 */
const deleteSinhVienById = async (sinhVienId) => {
  const sinhVien = await getSinhVienById(sinhVienId);
  if (!sinhVien) {
    throw new ApiError(httpStatus.NOT_FOUND, 'SinhVien not found');
  }
  await sinhVien.remove();
  return sinhVien;
};

module.exports = {
  createSinhVien,
  querySinhViens,
  getSinhVienById,
  getSinhVienByEmail,
  updateSinhVienById,
  deleteSinhVienById,
};
