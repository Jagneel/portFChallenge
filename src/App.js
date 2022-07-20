import './App.css';
import React, {Component, useState} from "react";
import Date from "./date.js";
import Abv from "./abvFilter";
import Bar from './beerData'

function App () {

 
      return (
        <div className="App">
        <div className="header">
          <h1>PortF Project</h1>
          <h5>Date Filter</h5>
          <Date/> - <Date/>

          <br></br><br></br>
          <h5>AVB %</h5>
          <Abv />
        </div>
        <div className="table" style={{ height: "800px" }}>
          <Bar/>
        </div>
      </div>
            
          );
          
  }
  

  


export default App;
