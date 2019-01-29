import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
class Rating extends Component {
    constructor(props) {
        super(props);
     
    this.state = {
        rating: 1
      };
    }
   
    onStarClick(nextValue, prevValue, name) {
      this.setState({rating: nextValue} ,() => this.props.searchrate(this.state.rating))
    }
   
    render() {
      const { rating } = this.state;
      
      return (                
        <div>
          <h4>Rating : {rating}</h4>
          <StarRatingComponent 
            name="rate1" 
            starCount={7}
            value={rating}
            onStarClick={this.onStarClick.bind(this)}
          />
        </div>
      );
    }
}
 
export default Rating;