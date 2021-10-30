const express = require('express');
const { baiTap1Controller } = require('../../controllers');

const router = express.Router();

router.route('/cau1').get(baiTap1Controller.cau1);
router.route('/cau2').get(baiTap1Controller.cau2);

module.exports = router;
