const express = require('express');
// const authMiddleware = require('../middlewares/auth-middleware');
const { uploadManyMiddleware } = require( '../middlewares/upload-middleware.js')
const {
  getImages,
  uploadImages,
  deleteImage,
} = require ('../controllers/image-controller.js')

const router = express.Router();

// middlewares
// router.use(authMiddleware);

router.get('/', getImages);

router.post('/', uploadManyMiddleware('files'), uploadImages);

router.delete('/:id', deleteImage);

module.exports = router;


