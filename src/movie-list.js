import React, { Component } from 'react';
import Card from './movie-card'
import LoaderHoc from './loaderHoc.js'


class List extends Component {
    // constructor(props) {
    //     super(props)
      
    // }
    render() { 
        const{news,isloading}=this.props
        return (<div className="listMovie">
            {news.map((el,index)=><Card item={el} key={index}/>)}
        </div>  );
    }
}
 
export default LoaderHoc(List);
    