const { Phuong } = require('../models');

/**
 * Create a phuong
 * @param {Object} phuongBody
 * @returns {Promise<Phuong>}
 */
const createPhuong = async (phuongBody) => {
  return Phuong.create(phuongBody);
};

/**
 * Query for phuongs
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryPhuongs = async (filter, options) => {
  const phuongs = await Phuong.paginate(filter, options);
  return phuongs;
};

module.exports = {
  createPhuong,
  queryPhuongs,
};
