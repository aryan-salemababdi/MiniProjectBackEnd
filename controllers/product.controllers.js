const { log } = require("console");
const ProductModel = require("../model/product.model");

async function get(req,res){
    try {
        const products = await ProductModel.find();
        res.writeHead(200,{"Content-Type": 'application/json'});
        res.write(JSON.stringify(products));
        res.end();
    } catch (err) {
        log(err);
    }

};

async function getById(req,res){
    try {
        const [,,,,id] = req.url.split("/")
        const product = await ProductModel.findById(id);
        res.writeHead(200,{"Content-Type": 'application/json'});
        res.write(JSON.stringify(product));
        res.end();
    } catch (err) {
        log(err);
    }

};

const ProductController = {
    get,
    getById,
}

module.exports = ProductController;