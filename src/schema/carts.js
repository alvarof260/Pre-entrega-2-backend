import mongoose from 'mongoose'

export const cartsSchema = new mongoose.Schema({
  id: Number,
  products: [{
    id: Number,
    quantity: Number
  }]
})
