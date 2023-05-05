const router = require('express').Router();

// import package swagger 
const swaggerUi = require('swagger-ui-express');
// import file json
const swaggerDocument = require('../docs/swagger.json')

const productController = require('../controller/productController');
const shopController = require('../controller/shopController');

// middlewares
const Auth = require('../middleware/auth');
const checkRole = require('../middleware/checkRole');

// API docs => dokumentasi API
router.use('/api-docs', swaggerUi.serve)
router.use('/api-docs', swaggerUi.setup(swaggerDocument))

const User = require('./users');
 
router.use('/api/v1/users/', User);

// API
// product
// jadi kita bikin API products ini  :
// 1) get bisa diakses oleh semua role
// 2) create update bisa diakses oleh role admin 
// 3) delete hanya bisa diakses oleh superadmin
router.get('/products', productController.getProducts)
router.get('/products/search', productController.searchProduct)
router.get('/api/products/:id', productController.getProductById)
router.put('/products/:id', productController.editProduct)
router.delete('/products/:id', productController.deleteProduct)
router.post('/api/products', productController.createProduct)

// shops
// jadi kita bikin API shops ini tidak bisa diakses kecuali oleh admin 
// 1) get dan search bisa diakses semua role
// 2) create update bisa diakses oleh role admin 
// 3) delete hanya bisa diakses oleh superadmin
router.get('/shops', shopController.getShops)
router.get('/shops/search', Auth, shopController.searchShops)
router.get('/api/shops/:id', Auth, shopController.getShopById)
router.put('/shops/:id', Auth, shopController.editShop)
router.delete('/shops/:id', Auth, shopController.deleteShop)
router.post('/api/v1/shops', Auth, checkRole('admin'), shopController.createShop)

// Dashboard

module.exports = router