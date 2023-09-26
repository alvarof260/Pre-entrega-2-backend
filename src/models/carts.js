import mongoose from 'mongoose'
import { cartsSchema } from '../schema/carts.js'

export const cartsDAO = mongoose.model('carts', cartsSchema)
