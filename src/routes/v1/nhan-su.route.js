const express = require('express');
const { nhanSuController } = require('../../controllers');
const { nhanSuValidation } = require('../../validations');
const validate = require('../../middlewares/validate');

const router = express.Router();

router.route('/phuong').post(validate(nhanSuValidation.addNhanSu), nhanSuController.addNhanSu);

module.exports = router;
