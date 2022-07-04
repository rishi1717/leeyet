import { Router } from "express"
import addProduct from "../Controllers/addProduct"
import deleteProduct from "../Controllers/deleteProduct"
import editProduct from "../Controllers/editProduct"
import getProduct from "../Controllers/getProduct"
import getProducts from "../Controllers/getProducts"

const router = Router()

router.post("/", addProduct)

router.get('/',getProducts)

router.get('/:id',getProduct)

router.put('/:id',editProduct)

router.delete('/:id',deleteProduct)