const express = require('express');
const articleRouter = require('./routes/articles');
const app = express();

app.set('view engine', 'ejs') //converit ejs to html

app.use('/articles',articleRouter);

app.get('/', (req,res)=>{
    res.render('index') // main page
})

app.listen(5000);
