import React from 'react';
import PropTypes from 'prop-types';

const AddCourseForm = ({title, onChangeHandler, onClickHandler}) => {
    return (
        <div>
            <h2>Add Course</h2>

            <input
                type="text"
                onChange={onChangeHandler}
                value={title}
            />

            <input
                type="submit"
                value="Save"
                onClick={onClickHandler}
            />
        </div>
    );
};

AddCourseForm.propTypes = {
    title: PropTypes.string,
    onChangeHandler: PropTypes.func.isRequired,
    onClickHandler: PropTypes.func.isRequired
};

export default AddCourseForm;
