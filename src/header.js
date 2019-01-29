import React, { Component } from 'react';

class Header extends Component {
// state = { keyword:'' }

handelchange=(event)=>{
// this.setState({keyword:event.target.value})
  this.props.searchname(event.target.value.trim())
}
    render() { 
        return (  <div>
         <input type="text" onChange={this.handelchange}/>
         <input type="button" value="Add Movie" onClick={()=>{
             this.props.addmovie({
                 image:prompt("inserer image"),
                 title:prompt("title of movie"),
                 type:prompt("type du film"),
                 rate:prompt("this is your rate")
                })
                }}/>
        </div>);
    }
}
 
export default Header;