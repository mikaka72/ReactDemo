import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as CourseActions from '../../actions/CourseActions';
import CourseForm from './CourseForm';
class ManageCoursePage extends React.Component {
    
        constructor(props, context){
            super(props, context);

           
            this.state = {
                course: Object.assign({}, this.props.course),
                errors: {}
            };
            
            this.updateCourseState = this.updateCourseState.bind(this);
            this.saveCourse = this.saveCourse.bind(this);
        }
        // new 
        componentWillReceiveProps(nextProps){
            if(this.props.courseId != nextProps.courseId){
                this.setState({course: Object.assign({}, nextProps.course)});
            }
        }

        updateCourseState(event) {
            const field = event.target.name;
            let course = Object.assign({}, this.state.course);
            course[field] = event.target.value;
            return this.setState({course: course});
        }

        saveCourse(event) {
            event.preventDefault();
            this.props.actions.saveCourse(this.state.course);
            this.context.router.push('/courses');
        }

        // onChange is needed so the form fields are accessible. calls update cours state with event.
        render(){
            return(
                <CourseForm 
                    allAuthors={this.props.authors}
                    onChange={this.updateCourseState}
                    onSave={this.saveCourse}
                    course={this.state.course}
                    errors={this.state.errors}
                />
                
            );
        }
    }
    // propTypes with Lowercase!!
    ManageCoursePage.propTypes = {
        course: PropTypes.object.isRequired,
        authors: PropTypes.array.isRequired,
        actions: PropTypes.object.isRequired
    };

    ManageCoursePage.contextTypes = {
        router: PropTypes.object
    };
    
    function getCourseById(courses, id){
        const course = courses.filter(course => course.id == id);
        if( course) return course[0]; // first (only) item form the array 
        return null;
    }

    function mapStateToProps(state, ownProps){

        const courseId = ownProps.params.id; // id form the path of URL. URL is set on the route.js!!

        let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

        if(courseId && state.courses.length>0){ // check that courses are loaded to prevent "null on load"!
            course = getCourseById(state.courses, courseId);
        }

        
        // creates object from Aut
        const authorsFormattedForDropdown = state.authors.map(author => {
            return{
                value : author.id,
                text : author.firstName + ' ' + author.lastName
            };
        });

        return {
            course: course,
            authors: authorsFormattedForDropdown
        };
    }
    
    function mapDispatchToProps(dispatch){
        return  {
           actions: bindActionCreators(CourseActions, dispatch)
        };
    }
    
   

    // connects the properties to state
    export default connect(mapStateToProps, mapDispatchToProps) (ManageCoursePage);