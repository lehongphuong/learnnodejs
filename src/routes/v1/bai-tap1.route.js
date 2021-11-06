const express = require('express');
const baiTap1Controller = require('../../controllers/bai-tap1.controller');

const router = express.Router();

router.route('/cau1').get(baiTap1Controller.cau1);
router.route('/cau2').get(baiTap1Controller.cau2);
router.route('/cau3').get(baiTap1Controller.cau3);
router.route('/cau4').get(baiTap1Controller.cau4);
router.route('/cau5').get(baiTap1Controller.cau5);
router.route('/cau6').get(baiTap1Controller.cau6);
router.route('/cau7').get(baiTap1Controller.cau7);
router.route('/cau8').get(baiTap1Controller.cau8);
router.route('/cau9').get(baiTap1Controller.cau9);
router.route('/cau10').get(baiTap1Controller.cau10);
router.route('/cau11').get(baiTap1Controller.cau11);
router.route('/cau12').get(baiTap1Controller.cau12);
router.route('/cau13').get(baiTap1Controller.cau13);
router.route('/cau14').get(baiTap1Controller.cau14);
router.route('/cau15').get(baiTap1Controller.cau15);
router.route('/cau16').get(baiTap1Controller.cau16);
router.route('/cau17').get(baiTap1Controller.cau17);
router.route('/cau18').get(baiTap1Controller.cau18);
router.route('/cau19').get(baiTap1Controller.cau19);
router.route('/cau20').get(baiTap1Controller.cau20);
router.route('/cau21').get(baiTap1Controller.cau21);
router.route('/cau22').get(baiTap1Controller.cau22);
router.route('/cau23').get(baiTap1Controller.cau23);
router.route('/cau24').get(baiTap1Controller.cau24);
router.route('/cau25').get(baiTap1Controller.cau25);

module.exports = router;
