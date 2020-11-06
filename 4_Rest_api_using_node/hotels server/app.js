
var express = require('express');

var app =express();
var hotellist = require('./hotel.json')
var cors = function(req, res, next) { 
    res.setHeader('Access-Control-Allow-Origin', '*');
     next();     } 
     app.use(cors);
app.get("/showHotels",function(req,res){
    res.status(200).send(hotellist);
})

app.get("/showByCity",function(req,res){
   var city = req.query.city;
   var newhotellist=[];
   hotellist.forEach(hotel =>{
      if(hotel.city==city){
          newhotellist.push(hotel);
      }
   });
   res.status(200).send(newhotellist);
})

app.listen('3001',function(){
    console.log('server listening in port 3001')
});

