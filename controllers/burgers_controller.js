var express = require('express');

var router = express.Router();
var burger = require("../models/burger.js");

/* the router is the path that the user will be inputting - meaning it is the 'route'
or the 'path' that the user follows to get to the application layer
The first thing we need to do is determine what information we want to be able to display in our pages, and then define appropriate URLs for returning those resources. 

Then we're going to need to create the routes (URL handlers) and views (templates) to display those pages.

That is what we are gonna do right now, foo*/



router.get("/", function(req, res){ // when a user hits our root url
    burger.selectTodo(function(data){ // it runs burger selectTodo function req is function(data) result is a var we create called hbsObject which is an object made from burgers data - which has the id,name and devoured
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res){
    burger.insertUno(req.body.burger_name, function(){
        res.redirect("/");
    });
});

router.put("/:id", function(req, res){
    var id = req.params.id;
    console.log("id", id);
    burger.updateUno(id, function(){
        res.redirect("/");

    });
});

module.exports = router;