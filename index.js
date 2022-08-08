const express = require("express"); //FunctionObject //express module
const path = require("path"); //pathObject //path module
const app = express(); //AppObject

//middlewareMethod - http structured request body parsed to req.body
app.use(express.urlencoded({ extended: true }));

//when view engine is used express assumes our views ie ejs templates
//exist in a (default)views directory
app.set("view engine", "ejs"); //auto require("ejs")
//change path to absolute path to index.js
app.set("views", path.join(__dirname, "/views"));

//executes callback
app.listen(3000, () => {
  console.log("listning on port 3000;");
});
