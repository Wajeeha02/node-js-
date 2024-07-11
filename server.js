import http from "http";
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  try {
    //Check if get request
    if (req.method === "GET") {
      if (req.url === "/") {
        res.write("hello wajeeha"), res.end();
      } else if (req.url === "/about") {
        res.write("About"), res.end();
      } else {
        res.write("Not found"), res.end();
      }
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {}
  res.writeHead(500, { "Content-Type": "text/html" });
  res.end("<h1>Server error</h1>");
});

server.listen(8000, () => {
  console.log(`Server running on Port :${PORT}`);
});
