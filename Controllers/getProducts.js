import Product from "../Models/productSchema.js"

const getProducts = async (req, res) => {
	try {
		const products = await Product.find({})
		res.send(products)
	} catch (err) {
		console.log(err)
		res.status(500).send(err.message)
	}
}

export default getProducts
