import Product from "../Models/productSchema.js"

const deleteProduct = async (req, res) => {
	try {
        await Product.findByIdAndDelete(req.params.id)
        res.send("Product deleted successfully")
	} catch (err) {
		console.log(err)
		res.status(500).send(err.message)
	}
}

export default deleteProduct
