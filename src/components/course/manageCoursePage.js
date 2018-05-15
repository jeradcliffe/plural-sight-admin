import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {saveCourseAction} from '../../actions/courseActions';
import {loadAuthorsActions} from "../../actions/authorActions";
import CourseForm from "./courseForm";
import {Redirect} from "react-router-dom";

class ManageCoursePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
            course: Object.assign({}, props.course),
            errors: {}
        }
    }

    componentWillMount() {
        this.props.loadAuthorsActions()
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
        this.setState({redirect: true});
    };

    render() {
        const {redirect} = this.state;

        if(redirect) {
            return <Redirect to="/courses"/>
        }

        return (
            <div>
                <CourseForm
                    course={this.state.course}
                    allAuthors={this.props.authors}
                    onSave={(e) => this.onSaveHandler(e)}
                    onChange={this.onChangeHandler}
                    errors={this.state.error}
                />
            </div>
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    const mockCourse = {
        id: "",
        title: "",
        watchHref: "",
        authorId: "",
        courseLength: "",
        category: ""
    };

    const authorsFormattedForDropdown = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + " " + author.lastName
        };
    });

    return {
        course: mockCourse,
        authors: authorsFormattedForDropdown
    };
}

const mapDispatchToProps = {
    saveCourseAction,
    loadAuthorsActions
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
