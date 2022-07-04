import multer from "multer"

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "uploads")
	},
	filename: function (req, file, cb) {
		cb(null, file.fieldname + "-" + Date.now())
	},
})
const store = multer({ storage: storage })
export default store
