import React,{Component} from "react";

export default class News extends Component{
    state = {
        movie :[]
      };

componentDidMount(){
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=53e60aeb7b3849c3bf4183582c0f935b').
    then((Response)=>Response.json()).
    then(data =>{
        let movies = data.articles.map((item)=>{
            console.log(item);

            return (
                    <li> {item.description}</li>
                );
        });
        this.setState({movie:movies});
    
    })
}

render(){
    var arr=[];
    if(this.state.movie!=null){
    for(var i=0;i<5;i++){     
      arr.push(this.state.movie[i]);
    }
    return(
            <div>
               
                    <li className="list-group-item list-group-item-secondary">
                        {arr}
                    </li>
               
            </div>
        );
    }
    }
}