const express = require("express");
const compress = require("compression");
const path = require("path");

const router = express.Router();
router.use(compress());
router.use(express.static(path.join(__dirname, "../../out")));
router.use(express.static(process.cwd() + "/out"));
router.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "../../out", "about.html"));
});

module.exports = router;
