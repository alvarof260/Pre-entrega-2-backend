import { productsDAO } from '../models/products.js'

export class ProductManagerBD {
  async getProducts () {
    try {
      const products = await productsDAO.find()
      return products
    } catch (err) {
      console.log(err.message)
      return err.message
    }
  }

  async getProductByID (id) {
    try {
      const product = await productsDAO.findById(id)
      return product
    } catch (err) {
      console.log(err.message)
      return err.message
    }
  }

  async addProduct (product) {
    try {
      await productsDAO.create(product)
      console.log('se logro crear el producto!')
      return product
    } catch (err) {
      console.log(err.message)
      return err.message
    }
  }

  async updateProduct (id, update) {
    try {
      await productsDAO.updateOne({ _id: id }, update)
    } catch (err) {
      console.log(err.message)
      return err.message
    }
  }

  async deleteProduct (id) {
    try {
      await productsDAO.deleteOne({ _id: id })
      console.log('se borro correctamente')
    } catch (err) {
      console.log(err.message)
      return err.message
    }
  }
}
