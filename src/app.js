import express from 'express'
import handlebars from 'express-handlebars'
import { Server } from 'socket.io'
import mongoose from 'mongoose'
import __dirname from './utils.js'
import productRouter from './routers/products-router.js'
import cartRouter from './routers/carts-router.js'
import viewRouter from './routers/views-router.js'

const PORT = process.env.PORT ?? 8080
const app = express()

app.use(express.json())
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))

app.use('/api/products', productRouter)
app.use('/api/carts', cartRouter)
app.use('/products', viewRouter)

/* const log = []

socketServer.on('connection', socket => {
  console.log('Nuevo cliente conectado')
  socket.on('productList', data => {
    socketServer.emit('updatedProducts', data)
  })
  socket.on('message', data => {
    log.push({ userId: socket.id, message: data })
    socketServer.emit('history', log)
  })
}) */

try {
  await mongoose.connect('mongodb+srv://alvarof260:delfina2@cluster0.cmr6jcw.mongodb.net/e-commerce')
  console.log('db connect')
  const httpServer = app.listen(PORT, () => {
    console.log(`listen on http://localhost:${PORT}`)
  })
  // const socketServer = new Server(httpServer)

  app.use('/api/products', productRouter)
  app.use('/api/carts', cartRouter)
  app.use('/products', viewRouter)
} catch (err) {
  console.log(err.message)
}
