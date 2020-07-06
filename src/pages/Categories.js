import React, { Component } from 'react';
import Categorie from '../datas/categories.json';
import { Link } from 'react-router-dom';
import './Categories.css';

class Categories extends Component {
    state = {  }
    render() { 

        let catList = Categorie.map( categorie => {
            let url = "/categories/" + categorie.slug;
            let color = categorie.color;
            return <Link to={url} key={categorie.id} className={color}>
                <h2 className="title is-3">{categorie.title}</h2>
                <i className={categorie.icon}></i></Link>
        })

        console.log(Categorie.color)
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