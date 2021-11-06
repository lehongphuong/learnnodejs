const express = require('express');
const baiTap1Controller = require('../../controllers/bai-tap1.controller');

const router = express.Router();

router.route('/cau1').get(baiTap1Controller.cau1);
router.route('/cau2').get(baiTap1Controller.cau2);
router.route('/cau3').get(baiTap1Controller.cau3);
router.route('/cau4').get(baiTap1Controller.cau4);

module.exports = router;
