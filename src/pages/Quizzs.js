import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import Quizz from '../datas/quizzs.json';

import './Quizzs.css';

class Quizzs extends Component {
    state = {  
        quizzs: []
    }

    componentDidMount() {
        axios.get('http://localhost:3000/quizzs/')
        .then(res => {
            this.setState({
                quizzs: res.data
            });
            console.log("coucou")
        })
    }
    render() { 
        

        let quizzsList = this.state.quizzs.map( quizz => { 
            let url = "/quizzs/" + quizz.slug 
            return <Link to={url} quizz={quizz} className="quizz column is-one-third tile">
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