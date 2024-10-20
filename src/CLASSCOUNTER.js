import React, { useState, useEffect } from "react";
import { Component } from 'react';

class ClassCounter extends Component {
  
    constructor(props) {
        super(props);
        // Initialize state if needed
        this.state = {
          count: 0
        };
      }
    
  
  

   inc=()=>{
    this.setState({ count: this.state.count + 1 });  
  }
  dec=()=>{
    this.setState({ count: this.state.count - 1 });  
  
  }
  
  
    
  
 
  render() {

  return (
    <>
        <h1>Counter App</h1>

        <p>Count: {this.state.count}</p>
        
        
        <div>
          
        <button onClick={this.inc}>
        Increment
        </button>
        <button onClick={this.dec}>
        Decrement 
        </button>
        </div >
        
        
        
        
        
        
        
        
        </>
  );
};}

export default ClassCounter;