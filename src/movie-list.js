import React, { Component } from 'react';
import Card from './movie-card'


class List extends Component {
    // constructor(props) {
    //     super(props)
      
    // }
    render() { 
        const{news}=this.props
        return (<div className="listMovie">
            {news.map((el,index)=><Card item={el} key={index}/>)}
        </div>  );
    }
}
 
export default List;
    