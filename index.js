const express= require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hola desd mi sever')
})

app.listen( 3000, function( ) {
console.log( 'Mi primer server corriendo en http://localhost:3000' );
});
