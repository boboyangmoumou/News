import {combineReducers} from 'redux';
import front from './frontReducer';
import admin from './admin';

const initialState = {
    isFetching: true,
    msg: {
        type: 1, //0 =>fail, 1=>sucess
        content: ''
    },
    userInfo: {}
};

export const actionsTypes ={
    // FETCH_START: "开始进行异步请求",
    // FETCH_END: "异步请求结束",
    // USER_LOGIN: "用户登录",
    // RESPONSE_USER_INFO: "收到登录信息",
    // SET_MESSAGE: "设置全局提醒",
    // USER_AUTH:"USER_AUTH"//后面免登陆再说这个
    FETCH_START: "FETCH_START",
    FETCH_END: "FETCH_END",
    USER_LOGIN: "USER_LOGIN",
    RESPONSE_USER_INFO: "RESPONSE_USER_INFO",
    SET_MESSAGE: "SET_MESSAGE",
    USER_AUTH:"USER_AUTH"
}

export const actions = {
    get_login: function(username,password) {
        return {
            type: actionsTypes.USER_LOGIN,
            username,
            password
        }
    },
    clear_msg: function() {
        return {
            type: actionsTypes.SET_MESSAGE,
            msgType: 1,
            msgContent: ''
        }
    },
    user_auth: function () {
        return {
            type: actionsTypes.USER_AUTH
        }
    }
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case actionsTypes.FETCH_START:
            return {
                ...state, isFetching: true
            };
        case actionsTypes.FETCH_END: 
            return {
                ...state, isFetching: false
            };
        case actionsTypes.SET_MESSAGE:
            return{
                ...state,
                isFetching: false,
                msg: {
                    type: action.message,
                    content: action.magContent
                }
            };
        case actionsTypes.RESPONSE_USER_INFO: //收到登录信息
            return {
                ...state, userInfo: action.data
            };
        default:
            return state
    }
}

export default combineReducers({
    front,
    globalState: reducer,
    admin
})