import { Router } from "express"
import store from "../multer.js"
import addProduct from "../Controllers/addProduct.js"
import deleteProduct from "../Controllers/deleteProduct.js"
import editProduct from "../Controllers/editProduct.js"
import getProduct from "../Controllers/getProduct.js"
import getProducts from "../Controllers/getProducts.js"

const router = Router()

router.post("/", store.array("productImg"), addProduct)

router.get("/", getProducts)

router.get("/:id", getProduct)

router.put("/:id", store.array("productImg"), editProduct)

router.delete("/:id", deleteProduct)

export default router
