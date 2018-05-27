import React,{Component} from "react";
import "./Feeds.css";

export default class News extends Component{
    state = {
        movie :[],
        newsImage:[],
        data:[]
      };

fetchResult =() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=f26ffb5634314b43828dc583475cdb03').
    then((Response)=>Response.json()).
    then(data =>{

        let movies=[];
        let feedsImage=[];
        
        this.setState({data:data.articles});
        //console.log(movies)
        this.setState({movie:movies,newsImage:feedsImage});
        let elm=[];
        for(var i=0;i<5;i++){
          elm.push(this.state.data[i])
        }
        // this.setState({data:elm})
        //console.log("elm",elm)
        this.setState({data:elm})
    
    })
}

componentDidMount(){
    this.fetchResult()
    setInterval(this.fetchResult, 30000);
}

render(){
    var arr=[];
    for(var i=0;i<5;i++){     
      if(this.state.movie[i]!=null){
      arr.push(this.state.movie[i]);
    }
  }
  return (
    <div>
      {this.state.data.map(function(item, key) {
             
               return (
                      <div className="list-group-item list-group-item-secondary row">
                      <hr/>
                      <div >
                      <li>
                            {item.title}
                            <span>...<a href={item.url}>Continue Reading</a></span>
                      </li>
                      <img src={item.urlToImage} class="square"/>
                      </div>
                     </div> 
                
                )
             
             })}
             </div>
            )
          }
        }







// render(){
//     var arr=[];
//     for(var i=0;i<5;i++){     
//       if(this.state.movie[i]!=null){
//       arr.push(this.state.movie[i]);
//     }
//   }
// //  console.log("MOvie",this.state.movie);
//   console.log("Arr",arr);
//   var namesList = arr.map(function(movie){
//     return <div>
//     <hr/>
//         <li>{movie.substring(0,50)}
//         <span>...<a href="/home">Continue Reading</a></span>
//         </li>
//     </div>;
//   })
//     return(
//             <div>
               
//                     <li className="list-group-item list-group-item-secondary row">
//                     <li>{item.description}</li>
//                     <img src={item.urlToImage}/>
            
//                     </li>
               
//             </div>
//         );
//     }
    
// }