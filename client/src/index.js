import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './app';
import Home from './HomeContainer';
import HeroesContainer from './heroes/HeroesContainer';
import PostHeroContainer from './heroes/PostHeroContainer';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/heroes" component={HeroesContainer}/>
      <Route path="/heroes/post" component={PostHeroContainer}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
