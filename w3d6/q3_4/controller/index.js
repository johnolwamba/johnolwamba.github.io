let Product = require("../models/product");

function buildProductArray() {
    Product.removeAll();
    (new Product(1, "Ugali", 200, "Maize flour paste")).save();
    (new Product(2, "Sukuma Wiki", 140, "Kales")).save();
    (new Product(3, "Cabbage", 120, "Cooked with ugali")).save();
    (new Product(4, "Cereals", 50, "Protein rich")).save();
    (new Product(5, "Wheat", 30, "Body building feeds")).save();
    return Product.getAll();
}

exports.getProducts = (req, res, next) => {
    const products = buildProductArray();
    res.render("index", {
        products: products,
        pageTitle: 'Products'
    });
}

exports.getShoppingCart = (req, res, next) => {
    const list = buildShoppingCart();

    let total = 0;
    list.forEach(value => {
        total += (value.quantity * value.product.price);
    });

    res.render("shoppingcart", {
        shoppinglist: list,
        total: total,
        pageTitle: 'Shopping Cart'
    });
}

exports.getAddToCart = (req, res, next) => {
    const {productId} = req.body;
};

function buildShoppingCart() {
    return [{
        quantity: 1,
        product: new Product(1, "Ugali", 200, "Maize flour paste")
    }, {
        quantity: 2,
        product: new Product(2, "Sukuma Wiki", 140, "Kales")
    }, {
        quantity: 1,
        product: new Product(3, "Cabbage", 120, "Cooked with ugali")
    }, {
        quantity: 3,
        product: new Product(4, "Cereals", 50, "Protein rich")
    }
    ];
}