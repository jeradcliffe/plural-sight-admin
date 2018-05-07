import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import AddCourseForm from './addCourseForm';

import {createCourse} from "../../actions/courseActions";

class CoursesPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            course: {
                title: ""
            }
        };
    }

    onChangeHandler = (event) => {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    };

    onClickHandler = () => {
        this.props.createCourse(this.state.course)
    };

    courseRow = (course, index) => {
        return <div key={index}>{course.title}</div>
    };

    render() {
        return (
            <div className="jumbotron">
                <h1>Courses</h1>
                <AddCourseForm
                    course={this.state.course.title}
                    onChangeHandler={this.onChangeHandler}
                    onClickHandler={this.onClickHandler}
                />
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
    createCourse
};

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
