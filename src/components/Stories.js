import React,{Component} from 'react';
//styling ko lagi css ne import gardeko chu Query.css
export default class Stories extends Component{

    constructor() {
        super();
        this.state = {
          userquery:'',
          queries:[]
        };
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
        return (
          <div class="container">
            {this.state.queries.map(function(item, key) {
              return(
            <div>
    
            <hr/>
            <div  className="list-group-item list-group-item-secondary row">
            {item.query}
            </div>
             
            </div>
              )
          })}
          </div>
        );
     
      }
}