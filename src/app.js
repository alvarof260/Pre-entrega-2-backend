import express from 'express'
import __dirname from './utils.js'
import handlebars from 'express-handlebars'
import { Server } from 'socket.io'
import productRouter from './routers/products-router.js'
import cartRouter from './routers/carts-router.js'
import viewRouter from './routers/views-router.js'
import mongoose from 'mongoose'

const PORT = process.env.PORT ?? 8080
const app = express()
const httpServer = app.listen(PORT, () => {
  console.log(`listen on http://localhost:${PORT}`)
})

app.use(express.json())

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))

app.use('/api/products', productRouter)
app.use('/api/carts', cartRouter)
app.use('/products', viewRouter)

const socketServer = new Server(httpServer)

socketServer.on('connection', socket => {
  console.log('Nuevo cliente conectado')
  socket.on('productList', data => {
    socketServer.emit('updatedProducts', data)
  })
})

try {
  await mongoose.connect('mongodb+srv://alvarof260:delfina2@cluster0.cmr6jcw.mongodb.net/e-commerce')
  console.log('db connect')
} catch (err) {
  throw new Error(err)
}
