var SuperHero = require('../models/superhero');
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);

var server = require('../server');

//Tests on the GET route
describe('/GET ALL HEROES', function(){
  it('returns heroes from DB', function(done){
    chai.request(server)
      .get('/api/superheroes')
      .end(function(err, res){
        res.should.have.status(200);
        res.body.should.have.property('message').eql('found your heros')
        res.body.data.should.be.a('array');
        done()
      })
  })
});

describe('/POST NEW HERO', function(){
  xit('can create a new hero', function(done){
    var hero = {
      name:       "Batman",
      superpower: "I am rich",
    }
    chai.request(server)
      .post('/api/superheroes')
      .send(hero)
      .end(function(err, res){
        res.should.have.status(200);
        res.body.should.have.property('message').eql('Hero Created!');
        res.body.data.should.be.a('object');
        res.body.data.should.have.property('name');
        res.body.data.should.have.property('superpowers');
        res.body.data.superpowers.should.be.a('array');
        done();
      })
  })

  it('will not make hero without name', function(done){
    var hero = {
      superpower: "I am rich",
    }

    chai.request(server)
      .post('/api/superheroes')
      .send(hero)
      .end(function(err, res){
        res.body.should.have.property('errors');
        res.body.errors.name.should.have.property('kind').eql('required');
        done()
      })
  });

})

describe('/GET SINGLE HERO', function(){
  it('should return hero by name', function(done){
    var hero = new SuperHero ({ name: "Fred" })
    hero.save(function(err, hero){
      chai.request(server)
        .get('/api/superheroes/'+ hero._id)
        .send(hero)
        .end(function(err,res){
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('name');
          done();
        })
    })
  })
});

describe('/EDIT A HERO', function(){
  it('I can update a hero', function(done){
    var hero = new SuperHero({ name: "bo" });
    hero.save(function(err,hero){
      chai.request(server)
        .put('/api/superheroes/'+ hero._id)
        .send({ name: "bo" })
        .end(function(err,res){
          res.should.have.status(200);
          res.body.should.have.property('message').eql('hero updated');
          res.body.data.should.have.property('name').eql('bo');
          done();
        });
    });
  })
});

describe('/DELETE A HERO', function(){
  it('Delete this hero by id', function(done){
    var hero = new SuperHero ({name: "bum" })
      hero.save(function(err,hero){
        chai.request(server)
          .delete('/api/superheroes/' + hero._id)
          .end(function(err,res){
            res.should.have.status(200);
            done();
          })
      })
  })
});
