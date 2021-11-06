const express = require('express');
const baiTap1Controller = require('../../controllers/bai-tap1.controller');

const router = express.Router();

router.route('/cau1').get(baiTap1Controller.cau1);

module.exports = router;
