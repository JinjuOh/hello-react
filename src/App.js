import React, { Component } from 'react';
import {Fragment} from "react";
import './App.css';
import Say from "./Say";
import EventPractice from "./EventPractice";
import EventPractice2 from "./EventPractice2";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";

class App extends Component {
    render() {
        return (
            <div>
                <ScrollBox ref={(ref)=>this.scrollBox=ref}/>
                <button onClick={()=>this.scrollBox.scrollToBottom()}>맨 밑으로</button>
            </div>
        )
    }
}
// const App = () => {
//     return (
//         <div>
//             <ScrollBox ref={(ref)=>this.scrollBox=ref}/>
//             <button onClick={()=>this.scrollBox.scrollToBottom()}>맨 밑으로</button>
//         </div>
//         )
// }

export default App;
