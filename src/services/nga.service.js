const { Nga } = require('../models');

/**
 * add Nga
 * @param {*} data
 * @returns
 */
const addNga = async (data) => {
  const result = await Nga.create(data);
  return result;
};

module.exports = {
  addNga,
};
