import { Router } from 'express'
import { ProductManagerBD } from './productManager.js'

const DM = new ProductManagerBD()

const router = Router()
/*
router.post('/', async (req, res) => {
  const cart = await CM.createCart()
  res.status(201).json(cart)
})

router.get('/:cid', async (req, res) => {
  const id = req.params.cid
  const cart = await CM.getCartByID(id)
  if (!cart) return res.status(404).json({ error: 'Cart not found' })
  res.status(200).json(cart)
})

router.post('/:cid/product/:pid', async (req, res) => {
  const cartId = req.params.cid
  const prodId = req.params.pid
  const isProduct = await DM.getProductByID(prodId)
  if (!isProduct) return res.status(404).json({ error: 'Product not found' })
  const carts = await CM.addProduct(cartId, prodId)
  res.status(200).json(carts)
}) */

export default router
