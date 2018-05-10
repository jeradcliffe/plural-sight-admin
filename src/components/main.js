import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "./home";
import About from "./about/about";
import CoursesPage from './course/coursesPage';
import ManageCoursePage from './course/manageCoursePage';

class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/courses" component={CoursesPage}/>
                    <Route path="/course" component={ManageCoursePage}/>
                    <Route path="/course:id" component={ManageCoursePage}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </main>
        );
    }
}

export default Main;

