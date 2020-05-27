export default {
  "disableCSSModules":true,
  publicPath:'/',
  alias: {
    '@': `${__dirname}/src`,
    '@@': `${__dirname}/src/components`,
  },
  extraBabelPlugins: [
    ['import', { 'libraryName': 'antd', 'libraryDirectory': 'es', 'style': 'css' }]
  ],
  proxy: {
    '/aps': {
      target: 'https://api.baxiaobu.com',
      changeOrigin: true,
      pathRewrite: {
        '^/aps': '',
      }
    },
    
    '/api': {
      target: 'https://blogs.zdldove.top',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      }
    },
  }
}
