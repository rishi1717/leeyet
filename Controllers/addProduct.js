import Product from "../Models/productSchema.js"

const addProduct = async (req, res) => {
	try {
		const { name, mrp, specification, image, discount, shippingCharge } =
			req.body
		await new Product({
			name,
			mrp,
			specification,
			image,
			discount,
			shippingCharge,
		}).save()
		res.send("Product added successfully")
	} catch (err) {
		console.log(err)
		res.status(500).send(err.message)
	}
}

export default addProduct
