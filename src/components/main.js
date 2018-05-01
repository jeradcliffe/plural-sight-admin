import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "./home";
import CoursesPage from './course/coursesPage';
import About from "./about/about";

class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/courses" component={CoursesPage}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </main>
        );
    }
}

export default Main;

