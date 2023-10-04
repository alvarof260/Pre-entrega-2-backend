import { Router } from 'express'
import { ProductManagerBD } from './productManager.js'
const router = Router()
const productManager = new ProductManagerBD()

router.get('/', async (req, res) => {
  const products = await productManager.getProducts()
  res.render('home', { products })
})

router.get('/chat', (req, res) => {
  res.render('chat', {})
})

router.get('/realTimeProducts', async (req, res) => {
  const products = await productManager.getProducts()
  res.render('realTimeProducts', { products })
})

export default router
