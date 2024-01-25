const path = require('path');
const express = require('express');
const port = process.env.PORT || 3080;
const rootDir = path.join(process.cwd(), 'dist');
const server = express();

// Serve static files (HTML, CSS, etc.)
server.use(express.static(rootDir));

// Always serve the index.html file for any routes not handled by a static file
server.get('*', (req, res) => {
  res.sendFile(path.join(rootDir, 'index.html'));
});

server.listen(port, () => {
  console.log(`App running at port ${port}…`);
});