const router = require('express').Router();

const productController = require('../controller/productController');
const userController = require('../controller/userController');
const shopController = require('../controller/shopController');

// API
// product
router.get('/products', productController.getProducts)
router.get('/products/search', productController.searchProduct)
router.get('/api/products/:id', productController.getProductById)
router.put('/products/:id', productController.editProduct)
router.delete('/products/:id', productController.deleteProduct)
router.post('/api/products', productController.createProduct)

// users
router.get('/users', userController.getUsers)
router.get('/api/users/:id', userController.getUserById)
router.put('/users/:id', userController.editUser)
router.delete('/users/:id', userController.deleteUser)
router.post('/api/users', userController.createUser)

// shops
router.get('/shops', shopController.getShops)
router.get('/shops/search', shopController.searchShops)
router.get('/api/shops/:id', shopController.getShopById)
router.put('/shops/:id', shopController.editShop)
router.delete('/shops/:id', shopController.deleteShop)
router.post('/api/shops', shopController.createShop)

// Dashboard

module.exports = router