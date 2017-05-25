import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
<<<<<<< HEAD
//require('bootstrap/dist/css/bootstrap.css');
import App from './App';
import Home from './HomeContainer';
import HeroesContainer from './heroes/HeroesContainer';
import PostHeroContainer from './heroes/PostHeroContainer';
import EditHeroContainer from './heroes/EditHeroContainer';
=======
import App from './app';
import Home from './HomeContainer';
import HeroesContainer from './heroes/HeroesContainer';
import PostHeroContainer from './heroes/PostHeroContainer';
>>>>>>> master
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
<<<<<<< HEAD
      <Route path="/home" component={Home}/>
      <Route path="/heroes" component={HeroesContainer}/>
      <Route path="/heroes/post" component={PostHeroContainer}/>
      <Route path="/heroes/edit/:heroId" component={EditHeroContainer}/>
=======
      <Route path="/heroes" component={HeroesContainer}/>
      <Route path="/heroes/post" component={PostHeroContainer}/>
>>>>>>> master
    </Route>
  </Router>,
  document.getElementById('root')
);
