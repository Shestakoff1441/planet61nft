// server.js
const { createServer } = require('http')
const { parse } = require('url')
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
// const routes = require('./routes/getCities')
const hostname = 'localhost'
const port = 3002
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

//   server.use('/api', routes.getArtistId)
  server.get('*', (req, res) => {
    return handle(req, res)
  })
  
  server.listen(port, (err) => {
    if (err) {
      throw err
    }
    console.log(`> Ready on http://localhost:${port}`)
  })
})
