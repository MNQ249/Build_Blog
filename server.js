const express = require("express");
const articleRouter = require("./routes/articles");
const app = express();

app.set("view engine", "ejs"); //converit ejs to html

app.use("/articles", articleRouter);

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test Article  1",
      createAt: new Date(),
      description: "Test for descriptions",
    },
    {
      title: "Test Article  2",
      createAt: new Date(),
      description: "Test for descriptions 2",
    },
  ];
  res.render("articles/index", { articles: articles }); // main page
});

app.listen(5000);
