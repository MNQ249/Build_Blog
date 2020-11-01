const express = require('express');
const mongoose = require('mongoose'); // to create a new database 
const articleRouter = require('./routes/articles');
const app = express();

mongoose.connect('mongodb://localhost/blog',
{ useNewUrlParser: true, useUnifiedTopology: true}) //connect our database

app.set('view engine', 'ejs'); // ejs work both html and js

app.use(express.urlencoded({ extended: false }))



app.get("/", (req, res) => {
  console.log('started home page')
  const articles = [
    {
      title: 'Test Article  1',
      createAt: new Date(),
      description: 'Test for descriptionssssss'
    },
    {
      title: 'Test Article  2',
      createAt: new Date(),
      description: 'Test for descriptionsttttttt 2'
    },
    {
      title: 'Test Article  3',
      createAt: new Date(),
      description: 'Test for descriptions 3'
    }
  ];
  res.render('articles/index', { articles: articles }); // main page
});

app.use('/articles', articleRouter);    

app.listen(5000);
