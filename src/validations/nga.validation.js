const Joi = require('joi');

const addNga = {
  body: Joi.object().keys({
    fullname: Joi.string().required(),
    address: Joi.string().optional(),
  }),
};

module.exports = {
  addNga,
};
