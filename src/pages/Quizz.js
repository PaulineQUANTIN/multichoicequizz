import React, { Component } from 'react';
import Quizzs from '../datas/quizzs.json';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Quizz extends Component {
    state = {  
        questionsList: []
    }

    componentDidMount() {
        let slug=this.props.match.params.slug;
        axios.get(`http://localhost:3000/quizzs/${slug}`)
        .then(res => {
            console.log(slug)
            this.setState({
                questionsList: res.data[0].questions
            });
            console.log("coucou");
            console.log(res);
            // console.log(this.state.questionsList[0].title);
            // console.log(this.state.questionsList);
        })
        
    }
    render() { 
        // if (this.state.questionsList === undefined)
        //     return(<div>coucou</div>);
        let list=this.state.questionsList;
        console.log(this.state.questionsList);
        let lists = list.map(question => {
            let title = question.title;
            let answerz = question.answers.map(element => {
                return <li><button>{element.answer}</button></li>
            })
            return <div className="zut">
                <h2>{title}</h2>
                <ul>{answerz}</ul>
                <button>Next</button>
            </div>
            // console.log(question.title)
        })
        
        return (  
            <div className="question">
                {lists}
                {/* {this.state.questionsList} */}
            </div>
        );
    }
}
 
export default Quizz;