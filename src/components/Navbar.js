import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import Quiz from '../img/categories/quiz.png';

class Navbar extends Component {
    state = {  }
    render() { 
        return (  
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <img src={Quiz} alt="" width="112" height="28" />

                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                    <NavLink exact to="/" className="navbar-item" activeClassName="is-active">
                        Home
                    </NavLink>

                    <NavLink to="/categories" className="navbar-item" activeClassName="is-active">
                        Catégories
                    </NavLink>

                    <NavLink to="/quizz" className="navbar-item" activeClassName="is-active">
                        Quizz
                    </NavLink>

                    </div>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;