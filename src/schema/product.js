/* import { object, boolean, number, string } from 'zod' */
import mongoose from 'mongoose'

export const productsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  code: {
    type: String,
    unique: true
  },
  price: {
    type: Number,
    required: true
  },
  status: {
    type: Boolean,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  thumbnails: {
    type: Array,
    default: []
  }
})
/*
const schemaProduct = object({
  title: string({
    invalid_type_error: 'title be must a string',
    required_error: 'title is required'
  }),
  description: string({
    invalid_type_error: 'description be must a string'
  }).default('no desc.'),
  code: string({
    invalid_type_error: 'code be must a string',
    required_error: 'code is required'
  }),
  price: number({
    required_error: 'price is required'
  }).min(0),
  status: boolean({
    invalid_type_error: 'status be must a boolean',
    required_error: 'status is required'
  }).default(true),
  stock: number({
    required_error: 'stock is required'
  }).int().min(0).max(),
  category: string({
    invalid_type_error: 'category be must a string',
    required_error: 'category is required'
  }),
  thumbnails: string().array().optional()
})

export function validateProduct (object) {
  return schemaProduct.safeParse(object)
}

export function validatePartialProduct (object) {
  return schemaProduct.partial().safeParse(object)
}
*/
