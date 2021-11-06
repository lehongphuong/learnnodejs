const express = require('express');
const khoaController = require('../../controllers/khoa.controller');

const router = express.Router();

router.route('/').post(khoaController.createKhoa).get(khoaController.getKhoas);

router.route('/:khoaId').get(khoaController.getKhoa).patch(khoaController.updateKhoa).delete(khoaController.deleteKhoa);

module.exports = router;
