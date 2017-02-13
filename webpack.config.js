module.exports = {
  entry : './src/Main.jsx',
  output : { filename: 'public/bundle.js' },
  module : {
    loaders : [
      {
        loader : 'babel-loader',
        query : {
          presets : ['es2015', 'react']
        }
      }
    ]
  }
}
