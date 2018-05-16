import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {saveCourseAction} from '../../actions/courseActions';
import {loadAuthorsActions} from "../../actions/authorActions";
import CourseForm from "./courseForm";
import {withRouter} from "react-router-dom";

class ManageCoursePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            course: {
                id: "",
                title: "",
                watchHref: "",
                authorId: "",
                courseLength: "",
                category: ""
            },
            errors: {}
        }
    }

    componentWillMount() {
        const {match: {params}, courses, loadAuthorsActions} = this.props;

        loadAuthorsActions();

        if (params.id) {
            let selectedCourse = courses.filter(course => course.id === params.id);
            this.setState({course: selectedCourse[0]});
        }
    }

    onChangeHandler = (event) => {
        const field = event.target.name;
        let course = Object.assign({}, this.state.course);
        course[field] = event.target.value;
        this.setState({course: course});
    };

    onSaveHandler = (event) => {
        event.preventDefault();
        this.props.saveCourseAction(this.state.course);
        this.props.history.push('/courses');
    };

    render() {
        const {error} = this.state;

        return (
            <div>
                <CourseForm
                    course={this.state.course}
                    allAuthors={this.props.authors}
                    onSave={(e) => this.onSaveHandler(e)}
                    onChange={this.onChangeHandler}
                    errors={error}
                />
            </div>
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object,
    authors: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    const authorsFormattedForDropdown = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + " " + author.lastName
        };
    });
    return {
        courses: state.courses,
        authors: authorsFormattedForDropdown
    };
}

const mapDispatchToProps = {
    saveCourseAction,
    loadAuthorsActions
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage));
