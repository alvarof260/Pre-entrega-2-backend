import { Router } from 'express'
import { ProductManager } from '../product-manager.js'

const router = Router()
const productManager = new ProductManager('./src/data/products.json')

router.get('/', async (req, res) => {
  const products = await productManager.getProducts()
  res.render('home', { products })
})

export default router
