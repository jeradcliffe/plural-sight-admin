import React from 'react';
import PropTypes from 'prop-types';
import TextInput from "../common/textInput";
import SelectInput from "../common/selectInput";

const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
    return (
        <form onSubmit={onSave}>
            <h1>Manage Course</h1>

            <TextInput
                name={"title"}
                label={"Title"}
                value={course.title}
                onChange={onChange}
                error={errors ? errors.title : ""}/>

            <SelectInput
                name={"authorId"}
                label={"Author"}
                value={course.authorId}
                defaultOption={"SelectAuthor"}
                options={allAuthors}
                onChange={onChange}
                error={errors ? errors.authorId : ""}/>

            <TextInput
                name={"category"}
                label={"Category"}
                value={course.category}
                onChange={onChange}
                error={errors ? errors.category: ""}/>

            <TextInput
                name={"courseLength"}
                label={"Course Length"}
                value={course.courseLength}
                onChange={onChange}
                error={errors ? errors.courseLength : ""}/>

            <input
                type="submit"
                disabled={loading}
                value={loading ? "Saving..." : "Save"}
                className="btn btn-primary"/>
        </form>
    );
};

CourseForm.propTypes = {
    course: PropTypes.object.isRequired,
    allAuthors: PropTypes.array,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    errors: PropTypes.object
};

export default CourseForm;
