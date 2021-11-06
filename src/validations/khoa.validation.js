const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createKhoa = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    role: Joi.string().required().valid('khoa', 'admin'),
  }),
};

const getKhoas = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getKhoa = {
  params: Joi.object().keys({
    khoaId: Joi.string().custom(objectId),
  }),
};

const updateKhoa = {
  params: Joi.object().keys({
    khoaId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string().custom(password),
      name: Joi.string(),
    })
    .min(1),
};

const deleteKhoa = {
  params: Joi.object().keys({
    khoaId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createKhoa,
  getKhoas,
  getKhoa,
  updateKhoa,
  deleteKhoa,
};
