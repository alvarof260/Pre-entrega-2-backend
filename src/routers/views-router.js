import { Router } from 'express'
import { ProductManager } from '../data/managers/product-manager.js'

const router = Router()
const productManager = new ProductManager('src/data/product.json')

router.get('/', async (req, res) => {
  const products = await productManager.getProducts()
  res.render('home', { products })
})

router.get('/realTimeProducts', async (req, res) => {
  const products = await productManager.getProducts()
  res.render('realTimeProducts', { products })
})

export default router
