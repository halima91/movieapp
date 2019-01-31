import React, { Component } from 'react';
import Loading from './loader'
const LoaderHoc=(WrappedComponent)=>{
  class LooderHoc extends Component {
     constructor(props){
         super(props)
         this.state = {  }
     }
    
     render() { 
         const{isloading}=this.props
         if(isloading===true)return <Loading/>
         else return <WrappedComponent {...this.props}/>
 }
 
 }
 return LooderHoc

}
export default LoaderHoc