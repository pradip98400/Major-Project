import React,{Component} from 'react';
import Navbar from './Navbar';
 

export default class Expert extends Component{
  render(){
      return(
          <div>
              <Navbar/>
            <p className='Heading'>You are in Expert Section</p>
          </div>
      );
  }
}