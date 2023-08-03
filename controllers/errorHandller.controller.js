 const notFound = (res) => {
    res.writeHead(404,{"Content-Type": 'application/json'});
    res.write(JSON.stringify({
        message: "route is not found",
    }));
    res.end();
 };

 const ErrorHandller = {
    notFound,
 }

 module.exports = ErrorHandller;