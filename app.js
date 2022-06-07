const express = require('express');
const path = require('path');
const index = require('./routes/index');
const app = express(); 
app.use('/', index);
app.set('view engine', 'html');
app.set('view', path.join(__dirname, 'views')); 