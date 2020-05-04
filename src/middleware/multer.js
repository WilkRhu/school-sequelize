const multer = require("multer");
const path = require("path");

module.exports = {
  dest: path.resolve(__dirname, "..", "tmp", "uploads"),
  storage: multer.diskStorage({
    destination: (req, res, cb) => {
      cb(null, path.resolve(__dirname, "..", "tmp", "uploads"));
    },
    filename: (req, file, cb) => {
      if (file !== undefined) {
        const data = Date.now();
        const fileName = file.fieldname + `_${data}_` + file.originalname;
        cb(null, fileName);
      }else {
          cb(null, true)
      }
    },
  }),
  limits: {
    fileSize: 100 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    const allowedMines = [
      "file/image/jpg",
      "file/image/jpeg",
      "file/image/png",
    ];
    if (allowedMines.includes(file.fieldname + "/" + file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid format"));
    }
  },
};
