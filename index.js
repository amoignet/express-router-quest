const express = require('express');

const comments = require('./routes/comments');
const posts = require('./routes/posts');
const tags = require('./routes/tags');

const app = express();
const port = 8000;







//Cette ligne permet de connecter le routeur - et ses routes - au système de routage fourni par app.
app.use('/api/comments', comments);

app.use('/api/posts', posts);

app.use('/api/tags', tags);

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  console.log(`Server is listening on ${port}`);
});
