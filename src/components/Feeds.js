import React,{Component} from 'react';
import './Home.css';

export default class Feeds extends Component{
    render(){
        return(
            <div>
                    <div class="container">
                        <div class="row">
                        <div class=" layout_3col_left">
                            Feeds
                        </div>
                        <div class="col-sm">
                            One of three columns
                        </div>
                        <div class="col-sm">
                            Improve Your Feed
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}