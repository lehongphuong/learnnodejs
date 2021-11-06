const { Lop } = require('../models');

/**
 * Query for lops
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const cau1 = async () => {
  const lops = await Lop.find();
  return lops;
};

module.exports = {
  cau1,
};
