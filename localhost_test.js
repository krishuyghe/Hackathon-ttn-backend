var http = require('http');


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
   // console.log(req.body.toString());
    res.end();
    //console.log("data van de url")
    //console.log(req.url);



    let body = [];
req.on('data', (chunk) => {
  body.push(chunk);
}).on('end', () => {
  body = Buffer.concat(body).toString();
  // at this point, `body` has the entire request body stored in it as a string
  console.log(body);
});



}).listen(8000);