const express = require("express");
const productController = require("../controller");

const options = {
    "caseSensitive": false,
    "strict": false
};

const router = express.Router(options);

router.get('/shoppingcart', productController.getShoppingCart);
router.post('/addToCart', productController.getAddToCart);
router.get('/', productController.getProducts);

module.exports = router;