import * as types from "../actions/ActionTypes";
import initialState from './InitialState';


function actionTypeEndsInSuccess(type){

    console.log('Ajax call ends in success');
    return type.substring(type.length - 8 ) == '_SUCCESS';
}

// simple reducer so if instead of switch case..
export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {
    if(action.type == types.BEGIN_AJAX_CALL) {
        console.log('BEGIN_AJAX_CALL');
        return state + 1;
    } else if(action.type == types.AJAX_CALL_ERROR || actionTypeEndsInSuccess(action.type)){
        return state -1;
    }

    return state;
}