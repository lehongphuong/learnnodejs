const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createMonHoc = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    role: Joi.string().required().valid('monHoc', 'admin'),
  }),
};

const getMonHocs = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getMonHoc = {
  params: Joi.object().keys({
    monHocId: Joi.string().custom(objectId),
  }),
};

const updateMonHoc = {
  params: Joi.object().keys({
    monHocId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string().custom(password),
      name: Joi.string(),
    })
    .min(1),
};

const deleteMonHoc = {
  params: Joi.object().keys({
    monHocId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createMonHoc,
  getMonHocs,
  getMonHoc,
  updateMonHoc,
  deleteMonHoc,
};
