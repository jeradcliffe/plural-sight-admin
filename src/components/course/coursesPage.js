import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loadCourses} from "../../actions/courseActions";
import CourseList from "./courseList";

class CoursesPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            course: {
                title: ""
            }
        };
    }

    render() {
        return (
            <div className="jumbotron">
                <h1>Courses</h1>
                <CourseList courses={this.props.courses}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        courses: state.courses
    }
}

const mapDispatchToProps = {
    loadCourses
};

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
