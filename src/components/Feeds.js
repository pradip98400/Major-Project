import React,{Component} from 'react';
import './Feeds.css';

export default class Feeds extends Component{
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
                                    <td>Top Stories</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">2</th>
                                    <td>New Questions</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Bookmarked Answers</td>
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
                        <div class="col-sm-7">
                            One of three columns
                        </div>
                        <div class="col-sm-2">
                            Improve Your Feed
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}