import mongoose from 'mongoose'
import { productsSchema } from '../schema/product.js'

export const productsDAO = mongoose.model('products', productsSchema)
