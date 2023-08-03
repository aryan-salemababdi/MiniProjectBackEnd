const jsonServer = require("json-server");

class ConnectToAPI {
  constructor() {
    this.server = jsonServer.create();
    this.router = jsonServer.router("/db.json");
    this.middlewares = jsonServer.defaults();
  }

  startServer() {
    this.server.use(this.middlewares);
    this.server.use(this.router);

    const PORT = 3000;
    this.server.listen(PORT, () => {
      console.log(`JSON Server is running on port ${PORT}`);
    });
  }
}

const apiServer = new ConnectToAPI();

module.exports = apiServer;
