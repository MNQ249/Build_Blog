const express = require('express');
const app = express();

app.set('view engine', 'ejs') //converit ejs to html

app.get('/', (req,res)=>{
    res.render('index')
})

app.listen(5000);
