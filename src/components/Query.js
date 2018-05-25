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
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }
  

  render() {
    const {userquery } = this.state;
    return (
      <div class="container">
        <form class="form-signin" onSubmit={this.onSubmit}>
          <h2 class="form-signin-heading" color="blue">Want to ask something? ask here!</h2>
         
          <label for="inputQuery" class="sr-only">query</label>
          <input type="query" class="form-control" placeholder="want to ask something? ask here!" name="userquery" value={userquery} onChange={this.onChange} required/>
        
          <button class="btn btn-lg btn-primary btn-block" type="submit">Ask</button>
          
        </form>
      </div>
    );
  }
}

export default query;
