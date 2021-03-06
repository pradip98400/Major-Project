import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.css';
//import Google from './GoogleLogin'

class query extends Component {

  constructor() {
    super();
    this.state = {
      userquery:'',
      queries:[]
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }
  
componentDidMount(){
  fetch('http://localhost:5000/query').
    then((Response)=>Response.json()).
    then(data =>{
      console.log("data is:",data);
        this.setState({queries:data})
        console.log(this.state.queries[0].query);
    })
    
}
  render() {
    const {userquery } = this.state;
    
    return (
      <div class="container">
        <form  class= "postcss" action="http://localhost:5000/queries" method="POST">
          <h3  color ="blue">Want to ask something? ask here!</h3>
         
          <label for="inputQuery" class="sr-only">query</label> 
          <input type="text" class="querycss" placeholder="Want to ask something? Ask here!" name="userquery" required/>
        
          <button class="btn btn-lg btn-primary button_position" >Ask</button>
        </form>
        <section>
                <h2 > Recent Queries</h2>
        </section>
        {this.state.queries.map(function(item, key) {
          return(
            <div class="container">

        <hr/>
        <div className="list-group-item list-group-item-secondary row posting_style  " >
        {item.query}
        </div>
         
        </div>
          )
      })}
      </div>
      
    );
 
  }
}

export default query;
