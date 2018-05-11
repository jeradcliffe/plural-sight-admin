import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import * as authorActions from '../../actions/authorActions';
import CourseForm from "./courseForm";

class ManageCoursePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            course: Object.assign({}, props.course),
            errors: {}
        }
    }

    onChangeHandler = (event) => {
      const field = event.target.name;
      let course = Object.assign({}, this.state.course);
      course[field] = event.target.value;
      return this.setState({course: course});
    };

    onSaveHandler = (event) => {
        event.preventDefault();
        this.props.courseActions.saveCourse(this.state.course);
    };

    render() {
        return (
            <div>
                <CourseForm
                    course={this.state.course}
                    allAuthors={this.props.authors}
                    onSave={this.onSaveHandler}
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
    const authorsFormattedForDropdown = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + " " + author.lastName
        };
    });

    return {
        // courses: courses,
        authors: authorsFormattedForDropdown
    };
}

const mapDispatchToProps = {
    courseActions,
    authorActions
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
