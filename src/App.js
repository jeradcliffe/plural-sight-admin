import './App.css';

import React, {Component} from 'react';

import Header from "./components/common/header";
import Main from "./components/main";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Main/>
            </div>
        );
    }
}

export default App;
