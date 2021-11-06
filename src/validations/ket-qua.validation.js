const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createKetQua = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    role: Joi.string().required().valid('ketQua', 'admin'),
  }),
};

const getKetQuas = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getKetQua = {
  params: Joi.object().keys({
    ketQuaId: Joi.string().custom(objectId),
  }),
};

const updateKetQua = {
  params: Joi.object().keys({
    ketQuaId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string().custom(password),
      name: Joi.string(),
    })
    .min(1),
};

const deleteKetQua = {
  params: Joi.object().keys({
    ketQuaId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createKetQua,
  getKetQuas,
  getKetQua,
  updateKetQua,
  deleteKetQua,
};
