import * as types from '../actions/ActionTypes';
import initialState from './InitialState';
// reducers need to be added to root deducer (reducers/index.js)!
// Also the store dispathc in root index.js for load needs to be added!
export default function CourseReducer(state = initialState.courses, action){
    switch(action.type){
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;

        case types.CREATE_COURSES_SUCCESS:
            return [
                ...state , Object.assign({}, action.course) // create copy or new course and add it tho existing courses with ... spread operator
            ];
        
        case types.UPDATE_COURSES_SUCCESS:
            return [
                ...state.filter(course => course.id !== action.course.id), // filter state course array 
                Object.assign({}, action.course)
            ];
        default:
            return state;
        
    }
}