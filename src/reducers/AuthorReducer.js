import * as types from '../actions/ActionTypes';
import initialState from './InitialState';
// reducers need to be added to root deducer (reducers/index.js)!
// Also the store dispathc in root index.js for load needs to be added!
export default function AuthorReducer(state = initialState.authors, action){
    switch(action.type){
        case types.LOAD_AUTHORS_SUCCESS:
            return action.authors;
        default:
            return state;
        
    }
}