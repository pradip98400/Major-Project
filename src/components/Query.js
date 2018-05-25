import React,{Component} from 'react';
//styling ko lagi css ne import gardeko chu Query.css
import "./Query.css";
export default class Query extends Component{

    render(){

        return(
            //div le enclosed gar hai, return bhitra yeuta matra tag le enclosed garnu parcha and nested garna pauchas
            <div>
                <p className="purple">Oi Puskar Chor yeta kaam gar tero Query ko</p>
            </div>
        )
    }
}