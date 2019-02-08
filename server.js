const express = require('express');
const fs = require('fs');

const apiRoutes = require('./api/routes');

const PORT = process.env.PORT || 5010;

const server = express();

server.use(express.json());

server.use(express.static(__dirname + '/public'));

server.use('/api', apiRoutes);

server.get('*', (req, res) => {
  return res.sendFile(__dirname + '/index.html');
});

server.listen(PORT, () => {
  console.log('\n\n' + '-'.repeat(20));
  console.log(new Date().toLocaleString());
  console.log(`Listening on PORT ${PORT}\n\n`);
});
