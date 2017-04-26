console.log("hello from hero.js in public dir");

var componentVue = new Vue({
  el: '#heropannel',
  data: {
    heroes: [],
    hero: {},
    newName: "",
    newSuperpower: "",
    newEvil: "",
  },
  methods: {
    deleteHero: function(id){
      if (confirm("You're about to adopt, continue?")){
        $.ajax({
          url: './api/superheroes/' + id,
          method: 'DELETE'
        }).done(function(data){
          console.log(data);
        })
      }
    },
    submitHero: function(e){
      e.preventDefault()
      alert ("you're creating a pup, this is dangerous fyi")
      var data = {
        name: this.newName,
        superpower: this.newSuperpower,
        evil: this.newEvil
      }
      $.ajax({
        url: '/api/superheroes',
        method: 'POST',
        data: data
      }).done(function(res){

      })
    },
  }
});

fetch('/api/superheroes')
  .then(function(blob){
    return blob.json();
  })
  .then(function(data){
    console.table(data);
    componentVue.heroes = data.data;
    componentVue.hero = data[1];
  })
  .catch(function(err){
    console.log("something's broken!");
    return err
  });
