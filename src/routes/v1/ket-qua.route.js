const express = require('express');
const ketQuaController = require('../../controllers/ket-qua.controller');

const router = express.Router();

router.route('/').post(ketQuaController.createKetQua).get(ketQuaController.getKetQuas);

router
  .route('/:ketQuaId')
  .get(ketQuaController.getKetQua)
  .patch(ketQuaController.updateKetQua)
  .delete(ketQuaController.deleteKetQua);

module.exports = router;
