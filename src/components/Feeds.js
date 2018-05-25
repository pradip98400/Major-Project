import React,{Component} from 'react';
import './Feeds.css';
import News from "./News";
import Query from "./Query";
import Stories from "./Stories";
import Bookmarked from "./Boomarked";

export default class Feeds extends Component{
    state={
        response:""
    }

    displayTitle(id){
        console.log(id)
        var x=document.getElementById(id);
        // console.log(x);
        // alert(x.textContent);
        if(id=="question"){
            this.setState({
                response: "question"
            });
        }
        else if(id=="stories"){
            this.setState({
                response: "stories"
            });
        }
        else if(id=="bookmarked"){
            this.setState({
                response: "bookmarked"
            });
        }
        console.log(this.state.response)

    }

     displaytitle(){
        console.log("dfdfoil",this.state.response)
        if(this.state.response=="question"){
            return(
            <Query/>)
        }
        else if(this.state.response=="stories"){
            return(
                <Stories/>
            )
        }
        else if(this.state.response=="bookmarked"){
            return(
                <Bookmarked/>
            )
        }
    }



    render(){

 
        return(
            <div>
                    <div class="container">
                        <div class="row">
                        <div class="col-sm-3">
                            {/*Feeds*/}
                            <table class="table table-hover col-sm-4" width='50%'>
                                {/*Feeds*/}
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">Feeds</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td id="comment" onClick={()=>this.displayTitle("stories")}>Top Stories</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td id="question" onClick={()=>this.displayTitle("question")}>New Questions</td>
                                        
                                        
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td colspan="2" id="bookmarked" onClick={()=>this.displayTitle("bookmarked")}>Bookmarked Answers</td>
                                    </tr>
                                </tbody>
                                {/* Links*/}
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">Links</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Information technology</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Health</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td colspan="2">Science</td>
                                    </tr>
                                 </tbody>
                                </table>
                        </div>
                        <div class="col-sm-6">
                            {
                                this.displaytitle()
                        }
                        </div>
                        <div class="col-sm-3 textalign">
                           <strong> Latest Tech News </strong>
                            
                            <News/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}