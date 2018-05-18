import React,{Component} from 'react';
import './Home.css';
import Navbar from './Navbar';
import Feeds from './Feeds';
    
    {/*import { Navbar, Nav,NavItem, NavDropdown, MenuItem,Jumbotron } from 'react-bootstrap';*/}

export default class Home extends Component{
  render(){
      return(
          <div>
            <Navbar/>
            <Feeds/>
            {/*<p className='Heading'>Hey You are in Home File</p>*/}
          </div>
      );
  }
}