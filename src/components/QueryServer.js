var express = require("express"),
    app=       express(),
    bodyParser = require("body-parser"),
    mongoose =      require("mongoose")


mongoose.connect("mongodb://localhost/query_db");
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Schema
var querySchema = new mongoose.Schema({
    query : String
}) 

var Query =mongoose.model("Query",querySchema);

// Query.create({
//     query:"hey my name is wosti"
// },function(err,query){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Newly created Query");
//         console.log(query);
//     }
// });

//routes
app.get("/query",function(req,res){
    Query.find({},function(err,queries){
        if(err){
            console.log(err);
        }
        else{
            res.send(queries);
        }
    })
});


app.post("/queries",function(req,res){
        var postQuery =req.body.userquery;
        console.log(postQuery);
        var newQuery = {query:postQuery}
        Query.create(newQuery,function(err,newlyCreated){
            if(err){
                console.log("dsfds",err);
            }
            else{
                res.redirect("http://localhost:3000/home");
            }
        })
       // res.send("you hit the post route")
});

app.listen(5000,function(){
    console.log("server has started!!!")
})