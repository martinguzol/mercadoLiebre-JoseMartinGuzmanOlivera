const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

const port = process.env.PORT || 3000;

app.get('/', (req,res) => {
    res.sendFile(path.resolve('./views/home.html'))
});
app.get('/login', (req,res) => {
    res.sendFile(path.resolve('./views/login.html'))
});
app.get('/register', (req,res) => {
    res.sendFile(path.resolve('./views/register.html'))
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
});