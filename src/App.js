import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar'

import Home from './pages/Home';
import Categories from './pages/Categories';
import Quizzs from './pages/Quizzs';


class App extends Component {
    render() {
        return (
          <Router>
              <div className="App">
              <Navbar/>
              </div>

              <Route exact path="/" component={Home} />
              <Route exact path="/categories" component={Categories} />
              <Route exact path="/categorie/:slug" component={Categories} />
              <Route exact path="/categorie/:slug/quizz/:id" component={Categories} />
              <Route path="/quizz/" component={Quizzs} />
              <Route path="/quizz/:id" component={Quizzs} />
          </Router>
        );
    }
}

export default App;
