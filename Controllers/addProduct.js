import Product from "../Models/productSchema.js"

const addProduct = async (req, res) => {
	try {
		const files = req.files
		let imgArray, img
		if (req.files) {
			imgArray = files.map((file) => {
				img = fs.readFileSync(file.path)
				return (encode_image = img.toString("base64"))
			})
		}
		const { name, mrp, specification, image, discount, shippingCharge } =
			req.body
		await new Product({
			name,
			mrp,
			specification,
			image,
			discount,
			shippingCharge,
			images: imgArray,
		}).save()
		res.send("Product added successfully")
	} catch (err) {
		console.log(err)
		res.status(500).send(err.message)
	}
}

export default addProduct
