import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CourseList from "./courseList";
import Link from "react-router-dom/es/Link";
import {loadCoursesAction} from "../../actions/courseActions";

class CoursesPage extends Component {
    componentWillMount() {
        this.props.loadCoursesAction();
    }

    render() {
        return (
            <div className="jumbotron">
                <h1>Courses</h1>
                <Link to="/course">
                    <input
                        type="submit"
                        value="Add Course"
                        className="btn btn-primary"
                    />
                </Link>
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
    loadCoursesAction
};

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
