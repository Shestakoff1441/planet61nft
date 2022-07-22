const path = require("path");

const withImages = require("next-images");
module.exports = withImages();

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
