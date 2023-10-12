// server.js
const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
// const routes = require('./routes/getCities')
const hostname = "localhost";
const port = 3002;
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("*", (req, res) => {
    if (req.headers.host.includes("www")) {
      res.redirect("https://planet61nft.com");
    }
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) {
      throw err;
    }
    console.log(`> Ready on http://localhosts:${port}`);
  });
});
