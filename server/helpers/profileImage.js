const multer = require('multer');

const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'Image');
  },
  filename: (req, file, cb) => {
    const mimeType = file.mimetype.split('/');
    const fileType = mimeType[1];
    const fileName = file.originalname + '.' + fileType;
    cb(null, fileName);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = ['Image/png', 'Image/jpeg', 'Image/jpg'];
  allowedMimeTypes.includes(file.mimetype) ? cb(null, true) : cb(null, false);
};

const storage = multer({ storage: diskStorage, fileFilter: fileFilter }).single(
  'Image'
);

module.exports = storage;
