#!/bin/sh

npm init -y
npm i express
touch index.js
tee -a index.js <<EOF
const express = require('express');
const app = express();
app.listen(30, () => {
  console.log('Simmple server started at ', 30);
});
EOF
