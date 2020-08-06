import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Category extends Component {
    state = { 
        category: []
     }

    componentDidMount() {
        let slug = this.props.match.params.slug;
        // console.log(this.props.match.params.title);
        // // console.log(category.title);
        axios.get(`http://localhost:3000/categories/${slug}`)
        .then(res => {
            this.setState({
                category: res.data
            })
        })
        // console.log(category.tite)
    }

    render() { 
        
        let categories = this.state.category.map( cat => {
            let url = "/quizz/" + cat.slug;
            // console.log(cat.title)
            return <article className="category"><Link to={url} className={this.props.match.params.color}><h1 className="title is-1">{cat.title}</h1></Link>
            
            {/* <p>{this.state.category.body}</p> */}
        </article> 
            
        })

        return ( 
            
        // <article className="category">
        //     <h1 className="title is-1">{this.state.category.title}</h1>
        //     <p>{this.state.category.body}</p>
        // </article> 
        <div className="cat columns is-centered is-multiline">
            {categories}
            <h2></h2>
        </div>
        );
    }
}
 
export default Category;