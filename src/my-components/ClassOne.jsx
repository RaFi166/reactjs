import React,{Component} from 'react';

class ClassOne extends Component{


    doThisAgain(){
        alert("Thnks for the click again");
    }
    render(){

        return(
            <div>  
            <button className="btn btn-success" onClick={this.doThisAgain}>Click me again!</button>
            <h1>{this.props.age}</h1>
            </div>
        );
          
    }
}

export default ClassOne