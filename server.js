const express = require('express');
const requireDir = require('require-dir');
const {luffy} = require('./art')
const app = express();

app.use(express.json());
app.use('/api', require('./src/routes'));

const porta = process.env.PORT || 8080;
app.listen(porta);
console.log('APP LISTENING ',luffy )