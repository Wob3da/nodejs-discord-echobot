var http = require( 'http' );

http.createserver(function (req, res) {
  res.write("i'm alive");
  res.end();
}).listen(8080);
