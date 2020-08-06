import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar'

import Home from './pages/Home';
import Categories from './pages/Categories';
import Quizzs from './pages/Quizzs';
import Question from './pages/Question';
import Category from './pages/Category';
import Quizz from './pages/Quizz';


class App extends Component {
    render() {
        return (
          <Router>
              <div className="App">
              <Navbar/>
              </div>

              <Route exact path="/" component={Home} />
              <Route exact path="/categories" component={Categories} />
              <Route path="/categories/:slug/" component={Category} />
              <Route exact path="/quizz/" component={Quizzs} />
              <Route path="/quizz/:slug" component={Quizz} />
          </Router>
        );
    }
}

export default App;
