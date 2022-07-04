import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	specification: {
		type: String,
		required: true,
	},
	mrp: {
		type: Number,
		required: true,
	},
	discount: {
		type: Number,
	},
	shippingCharge: {
		type: Number,
	},
	images: [
		{
			type: String,
		},
	],
})

const Product = mongoose.model("Product", productSchema)

export default Product
