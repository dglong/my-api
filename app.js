const http = require("http");

const server = http.createServer((req, res) => {
  res.write("<h1>Welcome, this is app 1</h1>");
  res.end();
});

server.listen(5000, () => {
  console.log("Server listening on port 5000");
});
