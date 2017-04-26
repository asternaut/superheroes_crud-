var express = require('express');
var Router = express.Router();
var Superhero = require('../models/villains')

// C
Router.route('/') // where's the URL? see server.js -> app.use('/api/superheroes', heroRoutes);
.find(function(req,res){
  Villain.find(function(err, data){
    if(err){
      console.log(err);
    }else{
      res.json(data);
    }
  });
}) // chained together here! // R
  .post(function(req,res){
    var newVillain = new Villain();
        newVillain.loadPower(req.body.superpower);
        newvillain.loadData(req.body);

        newVillain.save( function(err, v){
          if(err){
            console.log(err);
          }else{
            res.json(v);
          }
      });
    });

// U
Router.route('/:villain_id')
.put(function(req,res){
  Villain.findById(req.params.villain_id, function(err, hero){
    //if(!hero) return res.status(404); //400's not found error
    villain.loadPower(req.body.superpower);
    villain.loadData(req.body);

    villain.save(function(e){
      if(e){
        res.status(500).send(e); //500 = internal server
      }else{
        res.json(hero);
      }
    });
  });
}) // ommit ';' to chain together :)
.get(function(req,res){
  Villain.findById(req.params.villain_id, function(err, data){
      if(err){
        console.log(err);
      } else {
        res.json(data);
      }
    });
}) // Ds
.delete(function(req,res){
    Villain.remove({_id: req.params.villain_id}, function(err){
      if(err){
        console.log(err)
      } else {
        res.send("Villain  terminated!")
      }
    });
});

module.exports = Router;
