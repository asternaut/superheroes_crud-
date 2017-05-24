
var express = require('express');
var Router = express.Router();
var async = require('async');
var Note = require('../models/note');
var Superhero = require('../models/superhero');

// C
Router.route('/') // where's the URL? see server.js -> app.use('/api/superheroes', heroRoutes);
.get(function(req,res){
  Superhero.find()
    .populate('notes')
    .exec((err, data) => {
      if (err) throw err;
      res.send({data})
    })
})
.post(function(req,res){
  var hero = new Superhero();

    hero.loadPower(req.body.superpower);
    hero.loadData(req.body);

    hero.save(function(err, data){
      if(err){
        res.send(err);
      } else {
        res.json({ data, message: "Hero successfully added!" });
      }
    })
  });


Router.route('/multiple')
  .post(function(req,res){
    //batch update
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
.get((req,res) => {
  Superhero.findById(req.params.superhero_id)
  .populate('notes')
  .exec((err, data) => {
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

// route just for posting notes
// find a specific hero
// make a note
// add new note to hero
Router.route('/note/:superhero_id')
  .post((req, res) => {
    Superhero.findById(req.params.superhero_id, (err, hero) => {
      if(err) throw err;
      const newNote = new Note();
      newNote.loadData(req.body); //load data method defined eariler
      newNote.save((err, savedNote) => {
        if(err) throw err;
        hero.notes.push(savedNote);
        hero.save((err, savedHero) => {
          if(err) throw err;
          res.send({data: savedHero});
        })
      })
    })
  })

module.exports = Router;
