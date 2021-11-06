const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createLop = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    role: Joi.string().required().valid('lop', 'admin'),
  }),
};

const getLops = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getLop = {
  params: Joi.object().keys({
    lopId: Joi.string().custom(objectId),
  }),
};

const updateLop = {
  params: Joi.object().keys({
    lopId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string().custom(password),
      name: Joi.string(),
    })
    .min(1),
};

const deleteLop = {
  params: Joi.object().keys({
    lopId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createLop,
  getLops,
  getLop,
  updateLop,
  deleteLop,
};
