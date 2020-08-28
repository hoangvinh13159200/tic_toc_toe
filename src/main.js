const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars')
const app = express();
const port = 3000;

app.set('views', path.join(__dirname, './resources/views')); //cài đặt địa chỉ đường dẫn cho thư mục views

app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.get('/',(req, res)=>{
    res.render('home');
})
app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})