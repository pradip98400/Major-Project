import React,{Component} from "react";

export default class News extends Component{
    state = {
        movie :[]
      };

componentDidMount(){
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=f26ffb5634314b43828dc583475cdb03').
    then((Response)=>Response.json()).
    then(data =>{

        let movies=[];
        
        
        for(var i=0;i<data.articles.length;i++){
          //movies=data.articles[i].description;
           movies.push(data.articles[i].description);
       
        }
        // let movies=[];
        //  movies = data.articles.map((item)=>{
        //     console.log(item.description);

        //     return (
        //             movies.push
        //         );
        // });
        //console.log(movies)
        this.setState({movie:movies});
    
    })
}

render(){
    var arr=[];
    for(var i=0;i<5;i++){     
      if(this.state.movie[i]!=null){
      arr.push(this.state.movie[i]);
    }
  }
//  console.log("MOvie",this.state.movie);
  console.log("Arr",arr);
  var namesList = arr.map(function(movie){
    return <div>
    <hr/>
        <li>{movie.substring(0,50)}
        <span>...<a href="/home">Continue Reading</a></span>
        </li>
    </div>;
  })
    return(
            <div>
               
                    <li className="list-group-item list-group-item-secondary row">
                        {namesList}
            
                    </li>
               
            </div>
        );
    }
    
}