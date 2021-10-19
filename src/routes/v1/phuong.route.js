const express = require('express');
const phuongController = require('../../controllers/phuong.controller');

const router = express.Router();

router.route('/').post(phuongController.createPhuong).get(phuongController.getPhuongs);

module.exports = router;
