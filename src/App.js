import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Grid from 'react-css-grid'
import Login from './components/Login';
import Home from './components/Home'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/book')
      .then(res => {
        this.setState({ books: res.data });
        console.log(this.state.books);
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.props.history.push("/login");
        }
      });
  }

  logout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }
  render() {
    return (
        <div>
            
        </div>
    );
  }
}
export default App;