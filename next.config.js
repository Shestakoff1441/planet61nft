const path = require("path");

const withImages = require("next-images");
const withTM = require("next-transpile-modules")([]);
module.exports = withImages(withTM());

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  },
  eactStrictMode: true,
  // distDir: 'build',
  images: {
    loader: "akamai",
    path: ""
  }
};
