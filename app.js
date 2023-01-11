// import packages
const express = require('express');

// import models
const db = require('./models')
const { users, items } = db;

// import controllers (classes)
const UsersController = require('./controllers/usersController')
const ItemsController = require('./controllers/itemsController')

// initializing controllers
const usersController = new UsersController(users)
const itemsController = new ItemsController(items)

// import routers 
const UsersRouter = require('./routers/usersRouter')
const ItemsRouter = require('./routers/itemsRouter')

// initializing routers
const usersRouter = new UsersRouter(usersController).routes()
const itemsRouter = new ItemsRouter(itemsController).routes()

// Putting express together below this line
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/users', usersRouter)
app.use('/items', itemsRouter)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
})