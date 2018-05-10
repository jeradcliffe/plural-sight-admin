import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from "./courseForm";

class ManageCoursePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            course: Object.assign({}, props.course),
            errors: {}
        }
    }

    render() {
        return (
            <div>
                {/*<CourseForm*/}
                    {/*course={this.state.course}*/}
                    {/*allAuthors={[]}*/}
                    {/*onSave={}*/}
                    {/*onChange={}*/}
                    {/*errors={this.state.error}*/}
                {/*/>*/}
                Course form here
            </div>
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        course: state.course
    };
}

const mapDispatchToProps = {
    courseActions
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
