const getProducts = require('./routeHandlers/products').getProducts;

module.exports = function(app) {
    app.get('/products', getProducts);
};