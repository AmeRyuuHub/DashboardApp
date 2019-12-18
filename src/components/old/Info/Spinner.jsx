import React from 'react';
import './Spinner.css'
export function Spinner(props) {
    return (
        <div>
            <h1>{props.spin}</h1>
            <div className="loader" >
                <div className="inner one"></div>
                <div className="inner two"></div>
                <div className="inner three"></div>
            </div> 
        </div>

    
        
    )
  }




