import React, { Component } from 'react';

import './App.css';
import List from './movie-list'
import Header from './header'
import Rating from './rating'
// import Ratingnoedit from './ratingwithoutedit'
const tab=[
  {image:'http://fr.web.img6.acsta.net/c_150_200/pictures/17/05/23/22/36/599289.jpg',title:'Game of Thrones',type:'Drame,Fantastique',rate:4},
  {image:'http://fr.web.img4.acsta.net/c_150_200/pictures/18/07/23/11/26/1197339.jpg',title:'Breaking Bad',type:'Drame',rate:6},
  {image:'http://fr.web.img3.acsta.net/c_150_200/pictures/210/457/21045721_20131001172258551.jpg',title:'Peaky Blinders',type:'Historique, Policier',rate:2},
  {image:'http://fr.web.img2.acsta.net/c_150_200/pictures/18/10/31/17/34/2348073.jpg',title:'Rick et Morty',type:'Science fiction, Animation',rate:3} ]
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { new:tab, filtred:tab}
}

search=(k)=>{
let filter1 = this.state.filtred.filter((el,index)=>{return el.title.toLowerCase().startsWith(k)})
 this.setState({filtred:filter1},()=>{console.log('state updated')})
}
searchrate=(x)=>{
let filter2=this.state.filtred.filter((el,index)=> {return el.rate==x})
this.setState({filtred:filter2},()=>{console.log('state updated'+x)})
// this.setState({valeur:x})
}
add=(y)=>{
  // let filter1=this.state.filtred.concat(y)
  this.setState({filtred:this.state.filtred.concat(y)})
}
  render() {
    return (
      <div className="App">
      <Header searchname={this.search}  addmovie={this.add}/>
      <Rating searchrate={this.searchrate}/>
      <List news={this.state.filtred}/>
      
        
      </div>
    );
  }
}

export default App;
