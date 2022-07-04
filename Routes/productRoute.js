import { Router } from "express"
import addProduct from "../Controllers/addProduct.js"
import deleteProduct from "../Controllers/deleteProduct.js"
import editProduct from "../Controllers/editProduct.js"
import getProduct from "../Controllers/getProduct.js"
import getProducts from "../Controllers/getProducts.js"

const router = Router()

router.post("/", addProduct)

router.get('/',getProducts)

router.get('/:id',getProduct)

router.put('/:id',editProduct)

router.delete('/:id',deleteProduct)

export default router