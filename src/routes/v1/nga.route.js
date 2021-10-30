const express = require('express');
const { ngaController } = require('../../controllers');
const { ngaValidation } = require('../../validations');
const validate = require('../../middlewares/validate');

const router = express.Router();

router.route('/').post(validate(ngaValidation.addNga), ngaController.addNga);

module.exports = router;
