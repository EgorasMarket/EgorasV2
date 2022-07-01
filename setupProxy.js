const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = app => {
    app.use(createProxyMiddleware('/transactions/${txref}/verify', {

        target: 'https://api.flutterwave.com/v3',
        changeOrigin: true,
    }))
}