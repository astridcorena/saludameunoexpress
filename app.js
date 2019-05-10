const express = require('express');
const app = express();

app.get('/',(req, res)=>{
  if(req.query.nombre===undefined)
  var msn = '<h1>Hola desconocido!</h1>'
  else
  var msn ='<h1>Hola ' + req.query.nombre +'!</h1>'
  res.send(msn);
});

app.listen(3000, () => console.log('Listening on port 3000!'));
