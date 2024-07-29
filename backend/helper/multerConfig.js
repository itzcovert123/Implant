const multer = require('multer')

const Storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./uploads")
    },

    filename: (req, file, callback) => {
        const filename = `image-${Date.now()}.${file.originalname}`
        callback(null, filename)
    }
}
)

const fileFilter = (req, file, callback) => {

    if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
        callback(null, true)
    }
    else {
        callback(null, false)
        return callback(new Error("Only .png .jpg & .jpeg format Allowed"))
    }

}

const uploads = multer({
    storage: Storage,
    fileFilter: fileFilter
}).single('photo')

module.exports = uploads;