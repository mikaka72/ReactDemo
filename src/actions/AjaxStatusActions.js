import * as types from './ActionTypes';

export function beginAjaxCall() {
    return { type: types.BEGIN_AJAX_CALL};
}