const express = require('express');

const api = require('./routes');


const app = express();
const port = 8000;







//Cette ligne permet de connecter le routeur - et ses routes - au système de routage fourni par app.
app.use('/api', api);



app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  console.log(`Server is listening on ${port}`);
});
