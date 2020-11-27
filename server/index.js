const express = require('express')
const app = express()
const { graphqlHTTP } = require('express-graphql')
const mongoose = require('mongoose')
const schema = require('./schema/schema')
const cors = require('cors')
const config = require('./config/dev')

app.use(cors())
mongoose.connect(config.mongoDB_URI)
mongoose.connection.once('open', () => {
  console.log('db connected')
})

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)
app.listen(4000, () => {
  console.log('listening port 4000')
})
