import {combinReducers} from 'redux';

export const actionTypes = {
    ADMIN_URL_LOCATION: "ADMIN_URL_LOCATION"
};

const initialState = {
    url: "/"
};

export const actions = {
    change_location_admin: function(url) {
        return {
            type: actionTypes.ADMIN_URL_LOCATION,
            adta: url
        }
    }
};
export function reducer(state=initialState, action) {
    switch(action.type) {
        case actionTypes.ADMIN_URL_LOCATION:
        return {
            ...state,url:action.data
        };
        default:
            return state
    }
}
const admin = combinReducers({
    adminGlobalState: reducer,    
    // tags,
    // newArticle,
    // articles
})
export default admin