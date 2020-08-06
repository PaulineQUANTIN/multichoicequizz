import React, { Component } from 'react';
// import Categorie from '../datas/categories.json';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Categories.css';
// import './img/categories/';

class Categories extends Component {
    state = {  
        categories : []
    }

    componentDidMount() {
        axios.get('http://localhost:3000/categories')
        .then(res => {
            this.setState({
                categories: res.data
            })
        })
    }

    render() { 
        
        let catList = this.state.categories.map( categorie => {
            let url = "/categories/" + categorie.slug;
            // let url = `/${categorie.slug}`;
            return <Link to={url} key={categorie.id} categorie={categorie} className={categorie.color}>
                <h2 className="title is-3">{categorie.title}</h2>
                <i className={categorie.icon}></i>
                {/* <img src={categorie.imgUrl} alt="image de la catégorie"/> */}
                </Link>
        })

        return (  
            <div className="container mt-6">
                <div className="categories columns is-centered is-multiline">
                    {catList}
                </div>
            </div>
        );
    }
}
 
export default Categories;