const ImageModel = require ('../models/image-model.js')
const UserModel = require ('../models/user-model.js')
const ImageViewModel = require('../view-models/image-view-model.js')
const { deleteFile } = require ('../helpers/file-helpers.js')

 const getImages = async (req, res) => {
  //  const userDoc = await UserModel.findOne();
   const imageDocs = await ImageModel.find();

  const images = imageDocs.map(x => new ImageViewModel(x));

  res.status(200).json({
    images
  });
};

 const uploadImages = async (req, res) => {
  // const userDoc = await UserModel.findOne();
  console.log(req.files)
  const imgData = req.files.map(({ filename }) => ({
    src: filename,
    // user: userDoc.id,
  }));

  const imgDocs = await ImageModel.insertMany(imgData);
  const images = imgDocs.map(x => new ImageViewModel(x));

  res.status(200).send({
    images,
  });
}

 const deleteImage = async (req, res) => {
  const { id } = req.params;
  try {
    const imageDoc = await ImageModel.findById(id);

    const { PUBLIC_PATH, IMG_FOLDER_NAME } = process.env;
    const imgPath = `${PUBLIC_PATH}/${IMG_FOLDER_NAME}/${imageDoc.src}`;
    deleteFile(imgPath);

    await imageDoc.delete();

    res.status(200).send({
      message: 'Photo Successfully deleted',
      id,
    });


  } catch (error) {
    console.log(error);
    res.status(404).send({
      message: 'Photo not found',
    });
  }
}

module.exports ={
  getImages,
  uploadImages,
  deleteImage,
}