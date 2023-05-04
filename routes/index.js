const router = require('express').Router();

const productController = require('../controller/productController');
const shopController = require('../controller/shopController');

// middlewares
const Auth = require('../middleware/auth');

const User = require('./users');
 
router.use('/api/v1/users/', User);

// API
// product
router.get('/products', productController.getProducts)
router.get('/products/search', productController.searchProduct)
router.get('/api/products/:id', productController.getProductById)
router.put('/products/:id', productController.editProduct)
router.delete('/products/:id', productController.deleteProduct)
router.post('/api/products', productController.createProduct)

// shops
router.get('/shops', Auth, shopController.getShops)
router.get('/shops/search', shopController.searchShops)
router.get('/api/shops/:id', shopController.getShopById)
router.put('/shops/:id', shopController.editShop)
router.delete('/shops/:id', shopController.deleteShop)
router.post('/api/shops', Auth, shopController.createShop)

// Dashboard

module.exports = router