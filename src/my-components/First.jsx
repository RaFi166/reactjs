import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function doThis(){
    alert("Thanks for the functional click");
}


function First(props){
    return (

        <div>
            <h1>{ props.name}</h1>
            <button onClick={doThis} className="btn btn-success">
                Click me!
            </button>

        </div>

    

    
    );
}

export default First