const config = {
  entry: `${__dirname}/client/src/app.js`,
  output: {
    path: `${__dirname}/client/build`,
    filename: 'bundle.js'
  },
  mode: 'development'
};

module.exports = config;
