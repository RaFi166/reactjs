import React,{Component} from 'react';

class Rafi extends Component{
    constructor(){
        super()
        this.state={
            name:"mezbah",
            email:"rafim166@gmail.com"
        }
    }


        render(){
         return (
            <h1>{this.state.name}</h1>,
            <h2>{this.state.email}</h2>
   
         );
         }



}