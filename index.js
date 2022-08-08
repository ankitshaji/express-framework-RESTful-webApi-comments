//RESTful webApi - using REST principles
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

//fake database /resource
//array of objects
const comments = [
  {
    username: "Todd",
    comment: "lol that is so funny",
  },
  {
    username: "Skyler",
    comment: "I like to go bird watching with my dog",
  },
  {
    username: "Sk8rboi",
    comment: "Plz delete your account,Todd",
  },
  {
    username: "onlysaywoof",
    comment: "woof woof woof",
  },
];

//adddress - localhost:3000
//app is listening for (HTTPstructured) requests
//executes callback
app.listen(3000, () => {
  console.log("listning on port 3000;");
});

//RESTful webApi crud operations pattern

//httpMethod=get,path/resource-/comments  -(direct match/exact path)
//(READ) name-index,purpose-display all comments
//convert (http structured) request to jsObject + create response jsObject
app.get("/comments", (req, res) => {
  res.render("comments/index", { comments: comments }); //(ejs filePath,variable sent to ejs)
  //render() - executes js - converts  ejs file into pure html
  //render() - converts jsObject to (http structure)response //content-type:text/html
});
