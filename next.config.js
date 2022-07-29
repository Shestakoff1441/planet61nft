const path = require("path");

const withImages = require("next-images");
const withTM = require("next-transpile-modules")([]);
module.exports = withImages(withTM());

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl)$/,
      type: "asset/source"
    });
    return config;
  },
  // distDir: 'build',
  images: {
    loader: "akamai",
    path: ""
  }
};
