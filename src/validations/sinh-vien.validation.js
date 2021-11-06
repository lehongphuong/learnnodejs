const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createSinhVien = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    role: Joi.string().required().valid('sinhVien', 'admin'),
  }),
};

const getSinhViens = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getSinhVien = {
  params: Joi.object().keys({
    sinhVienId: Joi.string().custom(objectId),
  }),
};

const updateSinhVien = {
  params: Joi.object().keys({
    sinhVienId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string().custom(password),
      name: Joi.string(),
    })
    .min(1),
};

const deleteSinhVien = {
  params: Joi.object().keys({
    sinhVienId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSinhVien,
  getSinhViens,
  getSinhVien,
  updateSinhVien,
  deleteSinhVien,
};
