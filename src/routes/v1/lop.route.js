const express = require('express');
const lopController = require('../../controllers/lop.controller');

const router = express.Router();

router.route('/').post(lopController.createLop).get(lopController.getLops);

router.route('/:lopId').get(lopController.getLop).patch(lopController.updateLop).delete(lopController.deleteLop);

module.exports = router;
