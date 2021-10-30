const Joi = require('joi');

const addNhanSu = {
  body: Joi.object().keys({
    fullname: Joi.string().required(),
    address: Joi.string().optional(),
  }),
};

module.exports = {
  addNhanSu,
};
