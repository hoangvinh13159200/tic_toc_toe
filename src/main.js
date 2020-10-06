const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars')
const app = express();
const port = 3000;

app.set('views', path.join(__dirname, './resources/views')); //cài đặt địa chỉ đường dẫn cho thư mục views

app.use(express.static(path.join(__dirname, './public')))

app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.get('/',(req, res)=>{
    res.render('home')
})

app.get('/game', (req, res)=>{
    res.render('game')
})

app.get('/tiktactoe', (req, res)=>{
    res.render('new_tik_tac_toe')
})
app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})