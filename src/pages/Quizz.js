import React, { Component } from 'react';
import Quizzs from '../datas/quizzs.json';

class Quizz extends Component {
    state = {  }
    render() { 
        let categorie = this.props.categorie
        let quizzs = Quizzs.filter( quizz => quizz.categorie_id === categorie.id).map()
        
        return (  
            <div className="quizz">
                
            </div>
        );
    }
}
 
export default Quizz;