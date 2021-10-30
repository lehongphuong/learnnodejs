const express = require('express');
const { blogController } = require('../../controllers');

const router = express.Router();

router.route('/thaithu').post(blogController.createBlog)
    .get(blogController.getAllBlog);

module.exports = router;
