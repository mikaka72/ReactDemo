import * as types from './ActionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall} from './AjaxStatusActions';
import {ajaxCallError} from './AjaxStatusActions';

export function loadCoursesSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS , courses};
}

export function updateCourseSuccess(course) {
    return { type: types.UPDATE_COURSES_SUCCESS , course};
}

export function createCourseSuccess(course) {
    return { type: types.CREATE_COURSES_SUCCESS , course};
}

export function loadCourses(){
    return function(dispatch) {
       dispatch(beginAjaxCall());
       return courseApi.getAllCourses().then(courses => {
        dispatch(loadCoursesSuccess(courses));
       }).catch(error => {
           throw(error);
       });
    };
}

export function saveCourse(course){

    return function (dispatch, getState) {
       dispatch(beginAjaxCall());
       return courseApi.saveCourse(course).then(savedCourse => {
            course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse));
       }).catch(error => {
           dispatch(ajaxCallError());
           throw(error);
       });
    };
}
