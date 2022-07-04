import Product from "../Models/productSchema.js"

const editProduct = async (req, res) => {
	try {
		const { name, mrp, specification, image, discount, shippingCharge } =
			req.body
		await Product.findByIdAndUpdate(req.params.id, {
			name,
			mrp,
			specification,
			image,
			discount,
			shippingCharge,
		})
        res.send("Product updated successfully")
	} catch (err) {
		console.log(err)
		res.status(500).send(err.message)
	}
}

export default editProduct
