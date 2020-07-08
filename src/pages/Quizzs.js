import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Quizz from '../datas/quizzs.json';

import './Quizzs.css';

class Quizzs extends Component {
    state = {  }
    render() { 

        let quizzsList = Quizz.map( quizz => { 
            return <Link className="quizz column is-one-third tile">
                <h2 className="title is-3">{quizz.title}</h2>
                <i className={quizz.icon}></i>
                </Link>
        })

        return (  
            <div className="quizzs columns is-centered is-multiline mt-6">
                {quizzsList}
            </div>
        );
    }
}
 
export default Quizzs;