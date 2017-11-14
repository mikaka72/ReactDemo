import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/CourseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {

    constructor(props, context){
        super(props, context);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);

    }

    courseRow(course, index){
        return <div key= {index}>{course.title}</div>; // Return the list item as React "html" row!
    }

    redirectToAddCoursePage() {
        browserHistory.push('/course');
    }

    render(){
        const {courses} = this.props;
        return(
            <div>
                <h1>Courses</h1>
                <input type = "submit"
                    value= "Add course"
                    className = "btn btn-primary"
                    onClick={this.redirectToAddCoursePage}/>
                <CourseList courses={courses}/>
            </div>
        );
    }

}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};
// maps the state.courses to courses propety.. 
// Own properties are this components own props, state contains the data..
function mapStateToProps(state, ownProps){
    return{
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch){
    return  {
       // createCourse: course => dispatch(courseActions.createCourse(course))

       // binds all the actions in the courseActions file
       actions: bindActionCreators(courseActions, dispatch)
    };
}

// connects the properties to state
export default connect(mapStateToProps, mapDispatchToProps) (CoursesPage);