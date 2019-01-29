import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

 // import List from './movie-list'
const Card =(props)=>{
    
        return ( <div className="itemMovie">
           <img src= {props.item.image}></img>
        <h3 > {props.item.title} </h3>
        <h5> {props.item.type}</h5>
        <StarRatingComponent 
            name="rate1" 
            starCount={10}
            value={props.item.rate}
          //  onStarClick={this.onStarClick.bind(this)}
          />
        </div> );
    }

 
export default Card;