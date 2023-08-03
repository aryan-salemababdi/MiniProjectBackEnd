const products = require("./../data/db");

async function find() {

    return new Promise((rso,rej) => {
        rso(products);
    })

};
async function findById(id) {

    return new Promise((rso,rej) => {
        rso(products.find(product=>product.id === id));
    })

};

const ProductModel = {
    find,
    findById
};

module.exports = ProductModel;