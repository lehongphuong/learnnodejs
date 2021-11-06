const express = require('express');
const monHocController = require('../../controllers/mon-hoc.controller');

const router = express.Router();

router.route('/').post(monHocController.createMonHoc).get(monHocController.getMonHocs);

router
  .route('/:monHocId')
  .get(monHocController.getMonHoc)
  .patch(monHocController.updateMonHoc)
  .delete(monHocController.deleteMonHoc);

module.exports = router;
