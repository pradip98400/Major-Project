import React,{Component} from 'react';
import './Feeds.css';
import News from "./News";
import Query from "./Query";

export default class Feeds extends Component{
    state={
        response:""
    }

    displayTitle(id){
        console.log(id)
        var x=document.getElementById(id);
        // console.log(x);
        // alert(x.textContent);
        if(x.textContent=="question"){
            this.setState({
                response: "question"
            });
        }
        console.log(this.state.response)

    }

 displaytitle(){
        //console.log("dfdfoil",this.state.response)
        if(this.state.response!="question"){
            return(
            <Query/>)
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
                                        <td id="comment" onClick={()=>this.displayTitle("comment")}>Top Stories</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td id="question" onClick={()=>this.displayTitle("question")}>New Questions
                                        
                                        </td>
                                        
                                        
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
                            {this.displaytitle()}
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