
var express = require('express');
var Router = express.Router();
var async = require('async');
var Superhero = require('../models/superhero');

// C
Router.route('/') // where's the URL? see server.js -> app.use('/api/superheroes', heroRoutes);
.get(function(req,res){
  Superhero.find(function(err, data){
    if(err){
      res.send(err);
    }else{
      res.json({message: "found your heros", data});
    }
  });
}) // chained together here! // R
  .post(function(req,res){
    var newHeroes = [];
    //doing a bunch of things at once.. asynchronously (posting multiple at a time)
    async.each(req.body.data, function(hero, cb){
    var newSuper = new Superhero();
        newSuper.loadPower(hero.superpower);
        newSuper.loadData(hero);
        newSuper.save()
          .then(function(hero){
              newHeroes.push(hero);
              cb(newHeroes);
          }, function(err){
            if(err) cb(err);
          });
        }, function(err) {
          if(err) throw err;
          res.json(newHeroes)
      });
      //Posting one at a time
      newSuper.loadPower(req.body.superpower);
      newSuper.loadData(req.body);
      newSuper.save(function(err, sh){
        if(err){
          res.send(err);
        }else{
          res.json({ message: "Hero Created!", sh });
        }
  });

    });

// U
Router.route('/:superhero_id')
.put(function(req, res){
  Superhero.findById(req.params.superhero_id, function(err, data){
    //if(!hero) return res.status(404); //400's not found error
    data.loadPower(req.body.superpower);
    data.loadData(req.body);
    data.save(function(e){
      if(e){
        res.status(500).send(e); //500 = internal server
      }else{
        res.json({ message: "hero updated", data});
      }
    });
  });
}) // ommit ';' to chain together :)
.get(function(req,res){
  Superhero.findById(req.params.superhero_id, function(err, data){
      if(err){
        res.send(err);
      } else {
        res.json(data);
      }
    });
}) // D
.delete(function(req,res){
    Superhero.remove({_id: req.params.superhero_id}, function(err){
      if(err){
        res.send(err)
      } else {
        res.send("Superhero deleted!")
      }
    });
});

module.exports = Router;
