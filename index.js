//RESTful webApi - using REST principles
const express = require("express"); //FunctionObject //express module
const path = require("path"); //pathObject //path module
const app = express(); //AppObject

//form data middlewareMethod - http structured post request body parsed to req.body
//http structure post request could be from browser form or postman
app.use(express.urlencoded({ extended: true }));

//when view engine is used express assumes our views ie ejs templates
//exist in a (default)views directory
app.set("view engine", "ejs"); //auto require("ejs")
//change path to absolute path to index.js
app.set("views", path.join(__dirname, "/views"));

//fake database server with /resource
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
//(READ) name-index,purpose-display all comments from DB server
//convert (http structured) request to req jsObject + create res jsObject
app.get("/comments", (req, res) => {
  res.render("comments/index", { comments: comments }); //(ejs filePath,variable sent to ejs)
  //render() - executes js - converts  ejs file into pure html
  //render() - converts jsObject to (http structure)response //content-type:text/html
});

//httpMethod=get,path/resource-/comments/new  -(direct match/exact path)
//(READ) name-new,purpose-display form to submit new comment
//convert (http structured) request to req jsObject + create res jsObject
app.get("/comments/new", (req, res) => {
  res.render("comments/new"); //(ejs filePath)
  //render() - executes js - converts  ejs file into pure html
  //render() - converts jsObject to (http structure)response //content-type:text/html
});

//httpMethod=post,path/resource-/comments  -(direct match/exact path)
//(CREATE) name-create,purpose-create new comment on DB server
//http structured request body contains data - middleware parses to req.body
//convert (http structured) request to req jsObject + create res jsObject
app.post("/comments", (req, res) => {
  //object keys to variable - Object destructuring
  const { username, comment } = req.body; //{key/name:inputValue,key/name:inputValue}
  comments.push({ username: username, comment: comment }); //adding to end of array of objects ie Fake Database
  res.send("New form data added to fake database"); //send() - converts jsObject to (http structure)response //content-type:text/plain
});
