const express = require("express");
const app = express();
const users = require("../users.json");
module.exports = app;

//Example endpoint
app.get("/foo", (req, res) => {
  res.send(`foo`);
});

app.get("/users", (req, res) => {
  if ( Object.keys(req.query).length === 0 ){
    res.status(200);
    res.setHeader('Content-Type', 'application/json');
    //We can return all the users, but the excercise do not mention it
    //res.end(JSON.stringify(users));
    res.end(JSON.stringify({}));
  }
  
  // There is a query parameter... Is it id parameter?
  if ( typeof req.query.id === 'undefined' ){
    res.status(404);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({}));
  }
  
  let filteredUsers = users.filter(function (user){
    return user.id === req.query.id;
  });
  
  res.status(200);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(filteredUsers));
  
});