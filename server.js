const http = require("http");
const products = require("./data/db.json");
const ProductController = require("./controllers/product.controllers");
const ErrorHandller = require("./controllers/errorHandller.controller");
const PORT = 3000;
const server = http.createServer((req,res)=>{
        if(req.url === "/api/products"){
            ProductController.get(req,res);
        }
        else if (req.url.match(/\/api\/products\/[0-9]+/)){
            ProductController.getById(id)
        }
        else{
            ErrorHandller.notFound(res);
        }
}); 

server.listen(PORT);

console.log(`run server on port ${PORT} http://localhost:${PORT} `);