import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loadCourses} from "../../actions/courseActions";

class CoursesPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            course: {
                title: ""
            }
        };
    }

    courseRow = (course, index) => {
        return <div key={index}>{course.title}</div>
    };

    render() {
        return (
            <div className="jumbotron">
                <h1>Courses</h1>
                {this.props.courses.map((course, index) => this.courseRow(course, index))}

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
