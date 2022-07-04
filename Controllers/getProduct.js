import Product from "../Models/productSchema.js"

const getProduct = async (req, res) => {
	try {
		const product = await Product.findById(req.params.id)
		res.send(product)
	} catch (err) {
		console.log(err)
		res.status(500).send(err.message)
	}
}

export default getProduct
